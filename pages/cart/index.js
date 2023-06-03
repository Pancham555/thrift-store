import ShippingCard from "@components/components/shippingCard";
import Sidebar from "@components/components/sidebar";
import { useSidebar } from "@components/components/sidebarContext";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import useRazorpay from "react-razorpay";
import axios from "axios";
import CreateOrderId from "@components/components/functions/createOrderId";
import CartCard from "@components/components/cartCard";
const Cart = () => {
  const [open, setOpen] = useSidebar();
  const dispatch = useDispatch();
  const Razorpay = useRazorpay();
  const [userInfo, setUserInfo] = useState({
    email: "",
    first_name: "",
    last_name: "",
    apartment: "",
    zipcode: "",
    phone: "",
    city: "",
    address: "",
    state: "",
  });
  const [paymentComplete, setPaymentComplete] = useState({});

  const checkIfFillUp =
    userInfo.email.length > 2 &&
    userInfo.first_name.length > 2 &&
    userInfo.last_name.length > 2 &&
    userInfo.city.length > 2 &&
    userInfo.address.length > 2 &&
    userInfo.zipcode.length > 4 &&
    userInfo.phone.length >= 8 &&
    userInfo.state.length > 2;
  const cart = useSelector((state) => state.cart);
  const deliveryPrice = 80;
  const getTotalPrice = cart.reduce((accumulator, item) => {
    return accumulator + item?.attributes?.currentprice * item.quantity;
  }, 0);

  const getItem = cart.map((data) => ({
    id: data.id,
    title: data.attributes.title,
    quantity: data.quantity,
    totalprice: data.attributes.currentprice * data.quantity,
  }));

  const Checkout = useCallback(async () => {
    try {
      const orderObject = await CreateOrderId(
        userInfo,
        getTotalPrice,
        deliveryPrice,
        getItem
      );

      const rzp = new Razorpay({
        key: process.env.RAZORPAY_APIKEY,
        amount: orderObject.res.order_details.amount,
        currency: orderObject.res.order_details.currency,
        name: "Drip Vault",
        theme: { color: "#000000" },
        image: "/The White Ghost.png",
        order_id: orderObject.res.order_details.id,
        prefill: {
          name:
            orderObject.res.order_details.first_name +
            " " +
            orderObject.res.order_details.last_name,
          email: orderObject.res.order_details.email,
          contact: orderObject.res.order_details.phone,
        },
        handler: async (resp) =>
          setPaymentComplete({ id: orderObject.res.id, ...resp }),
      });
      rzp.on("payment.failed", function (response) {
        console.log(response);
      });
      rzp.open();
    } catch (error) {
      console.log(error);
    }
  }, [Razorpay, userInfo, getItem, getTotalPrice]);

  const CompletePaymentInfo = useCallback(async (paymentInfo) => {
    try {
      const baseurl = process.env.STRAPI_URL;
      const url = baseurl + `/api/razorpay`;
      const sendPaymentInfo = await axios.put(url, { ...paymentInfo });
      if (sendPaymentInfo.status === 200) {
        toast.success("Payment Process completed");
        setUserInfo({
          email: "",
          first_name: "",
          last_name: "",
          apartment: "",
          zipcode: "",
          phone: "",
          city: "",
          address: "",
          state: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (
      paymentComplete === {} ||
      paymentComplete.razorpay_payment_id === undefined ||
      paymentComplete.razorpay_signature === undefined ||
      paymentComplete.razorpay_order_id === undefined
    ) {
    } else {
      CompletePaymentInfo(paymentComplete);
      dispatch(clearCart());
    }
  }, [paymentComplete, CompletePaymentInfo, dispatch]);

  return (
    <>
      <ToastContainer />
      <main className="bg-gray-800 text-gray-300">
        <Sidebar open={open} setOpen={setOpen} />
        <section className={` h-full bg-gray-100 py-12 sm:py-16 lg:py-20`}>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <h1 className="text-2xl font-semibold text-gray-900">
                Your Cart
              </h1>
            </div>
            {cart.length === 0 ? (
              <>
                <div className="w-full py-8 flex items-center justify-center">
                  <h1 className="text-2xl font-semibold text-gray-900">
                    No items in your cart 😢
                  </h1>
                </div>
              </>
            ) : (
              <div className="mx-auto mt-8 max-w-2xl md:mt-12">
                <div className="bg-white shadow">
                  <div className="px-4 py-6 sm:px-8 sm:py-10">
                    <div className="flow-root">
                      <ul className="-my-8">
                        {cart?.map((data, index) => {
                          return <CartCard data={data} key={index} />;
                        })}
                      </ul>
                    </div>

                    <div className="mt-6 border-t border-b py-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">Subtotal</p>
                        <p className="text-lg font-semibold text-gray-900">
                          ₹{getTotalPrice}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">Shipping</p>
                        <p className="text-lg font-semibold text-gray-900">
                          ₹{deliveryPrice}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pb-5 border-b flex items-center justify-between">
                      <p className="text-lg font-medium text-gray-900">Total</p>
                      <p className="text-2xl font-semibold text-gray-900">
                        <span className="text-xs font-normal text-gray-500">
                          INR
                        </span>{" "}
                        {getTotalPrice + deliveryPrice}
                      </p>
                    </div>
                    <div className="py-2">
                      <ShippingCard
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (checkIfFillUp) {
                            Checkout();
                          }
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          if (checkIfFillUp) {
                            Checkout();
                          }
                        }}
                        type="submit"
                        className={`group inline-flex w-full items-center justify-center rounded-md ${
                          checkIfFillUp
                            ? "bg-gray-900 hover:bg-gray-800"
                            : "bg-gray-400 hover:bg-gray-400"
                        }  px-6 py-3 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow `}
                      >
                        Checkout
                        {/* Add shipping details */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;

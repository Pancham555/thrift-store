import axios from "axios";

const CreateOrderId = async (
  userInfo,
  getTotalPrice,
  deliveryPrice,
  getItem
) => {
  try {
    const baseurl = process.env.STRAPI_URL;
    const url = baseurl + `/api/razorpay`;
    const createOrder = await axios.post(url, {
      email: userInfo.email,
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      address: userInfo.address,
      apartment: userInfo.apartment,
      zipcode: userInfo.zipcode,
      city: userInfo.city,
      state: userInfo.state,
      phone: userInfo.phone,
      totalitemsprice: getTotalPrice,
      deliveryprice: deliveryPrice,
      amount: getTotalPrice + deliveryPrice,
      currency: "INR",
      receipt: "receipt",
      products: [...getItem],
    });
    return createOrder.data;
  } catch (error) {
    console.log(error);
  }
};
export default CreateOrderId;

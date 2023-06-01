import React from "react";
const ShippingCard = ({ userInfo, setUserInfo, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="mb-5 mx-auto text-gray-900">
      <div className="md:flex ">
        <div className="w-full py-4">
          <span className="font-medium text-lg">Customer Information</span>
          <div className="relative pb-5">
            <input
              type="email"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              className="font-medium border-gray-300 border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-base"
              placeholder="E-mail"
            />
          </div>
          <span className="font-medium text-lg">Shipping Address</span>
          <div className="grid md:grid-cols-2 md:gap-2">
            <input
              type="text"
              className="font-medium border-gray-300 border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-base"
              placeholder="First name*"
              value={userInfo.first_name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, first_name: e.target.value })
              }
            />
            <input
              type="text"
              className="font-medium border-gray-300 border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-base"
              placeholder="Last name*"
              value={userInfo.last_name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, last_name: e.target.value })
              }
            />
          </div>
          <input
            type="text"
            className="font-medium border-gray-300 border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-base"
            placeholder="Address*"
            value={userInfo.address}
            onChange={(e) =>
              setUserInfo({ ...userInfo, address: e.target.value })
            }
          />
          <input
            type="text"
            className="font-medium border-gray-300 border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-base"
            placeholder="Apartment, suite, etc. (optional)"
            value={userInfo.apartment}
            onChange={(e) =>
              setUserInfo({ ...userInfo, apartment: e.target.value })
            }
          />
          <div className="grid md:grid-cols-3 md:gap-2">
            <input
              type="text"
              className="font-medium border-gray-300 border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-base"
              placeholder="Zipcode*"
              value={userInfo.zipcode}
              onChange={(e) =>
                setUserInfo({ ...userInfo, zipcode: e.target.value })
              }
            />
            <input
              type="text"
              className="font-medium border-gray-300 border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-base"
              placeholder="City*"
              value={userInfo.city}
              onChange={(e) =>
                setUserInfo({ ...userInfo, city: e.target.value })
              }
            />
            <input
              type="text"
              className="font-medium border-gray-300 border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-base"
              placeholder="State*"
              value={userInfo.state}
              onChange={(e) =>
                setUserInfo({ ...userInfo, state: e.target.value })
              }
            />
          </div>
          <input
            type="text"
            className="font-medium border-gray-300 border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-base"
            placeholder="Phone Number*"
            value={userInfo.phone}
            onChange={(e) =>
              setUserInfo({ ...userInfo, phone: e.target.value })
            }
          />
        </div>
      </div>
    </form>
  );
};

export default ShippingCard;

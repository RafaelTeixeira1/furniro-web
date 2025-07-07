import React, { useState } from "react";
import ShopBar from "../components/common/ShopBar";
import StoreAdvantages from "../components/common/StoreAdvantages";

const CheckoutPage: React.FC = () => {
  const breadcrumb = ["Home", "Checkout"];
  const [selectedPayment, setSelectedPayment] = useState("bank1");

  const paymentMethods = [
    {
      id: "bank1",
      label: "Direct Bank Transfer",
      description:
        "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
    },
    {
      id: "bank2",
      label: "Direct Bank Transfer",
      description:
        "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
    },
    {
      id: "cod",
      label: "Cash On Delivery",
      description: "Pay with cash upon delivery."
    }
  ];

  const fields = [
    "Company Name (Optional)",
    "ZIP code",
    "Country / Region",
    "Street Address",
    "Town / City",
    "Province",
    "Add-on Address",
    "Email Address"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <ShopBar breadcrumb={breadcrumb} />

      <main className="flex flex-col md:flex-row justify-center gap-8 px-4 md:px-8 lg:px-16 py-12 max-w-[1440px] mx-auto w-full">
        
        {/* Checkout Form */}
        <section className="flex-1 max-w-xl w-full">
          <h2 className="text-[36px] font-semibold mb-6">Billing details</h2>
          <form className="flex flex-col">

            {/* First Name & Last Name side by side */}
            <div className="flex gap-[30px] mb-[82px]">
              <div className="flex flex-col">
                <label className="text-[16px] font-medium mb-2">First Name</label>
                <input
                  type="text"
                  className="border p-3 rounded-[10px] w-[211px] h-[75px]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[16px] font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  className="border p-3 rounded-[10px] w-[211px] h-[75px]"
                />
              </div>
            </div>

            {/* Label in the middle for Company Name (Optional) */}
            <label className="text-[16px] font-medium mb-[41px] text-left">
              Company Name (Optional)
            </label>
            <input
              type="text"
              className="border p-3 rounded-[10px] w-[453px] h-[75px]"
            />

            {/* Remaining fields with labels in the middle */}
            {fields.slice(1).map((label, idx) => (
              <React.Fragment key={idx}>
                <label className="text-[16px] font-medium mt-[41px] mb-[41px] text-left">
                  {label}
                </label>
                <input
                  type={label === "Email Address" ? "email" : "text"}
                  className="border p-3 rounded-[10px] w-[453px] h-[75px]"
                />
              </React.Fragment>
            ))}

            {/* Additional Information */}
            <textarea
              placeholder="Additional Information"
              className="border p-3 rounded-[10px] w-[453px] h-[75px] text-gray-400 placeholder-gray-400 mt-[41px]"
              rows={3}
            />
          </form>
        </section>

        {/* Order Summary */}
        <aside className="w-full md:max-w-sm p-6 rounded h-fit">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">Product</h2>
            <h2 className="text-xl font-semibold">Subtotal</h2>
          </div>

          <div className="flex justify-between mb-2">
            <span>Asgaard Sofa × 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between font-semibold pt-2 mt-2">
            <span>Total</span>
            <span className="text-yellow-600">Rs. 250,000.00</span>
          </div>

          <hr className="my-4" />

          <div className="mt-6">
            <p className="font-medium mb-2">Payment Method</p>
            {paymentMethods.map((method) => (
              <label key={method.id} className="flex items-start mb-4 gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={selectedPayment === method.id}
                  onChange={() => setSelectedPayment(method.id)}
                  className="mt-1"
                />
                <div>
                  <span className="font-medium">{method.label}</span>
                  {selectedPayment === method.id && (
                    <p className="text-xs text-gray-500 mt-1">{method.description}</p>
                  )}
                </div>
              </label>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Your personal data will be used to support your experience throughout this website,
            to manage access to your account, and for other purposes described in our privacy policy.
          </p>

          <button className="w-full border mt-6 py-3 rounded hover:bg-gray-100 transition">
            Place order
          </button>
        </aside>
      </main>

      <StoreAdvantages />
    </div>
  );
};

export default CheckoutPage;

import React, { useState, useEffect, useRef } from "react";
import ShopBar from "../components/common/ShopBar";
import StoreAdvantages from "../components/common/StoreAdvantages";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "sonner";

const CheckoutPage: React.FC = () => {
  const breadcrumb = ["Home", "Checkout"];
  const [selectedPayment, setSelectedPayment] = useState<string | null>(
    "bank1"
  );

  const paymentMethods = [
    {
      id: "bank1",
      label: "Direct Bank Transfer",
      description:
        "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
    },
    {
      id: "bank2",
      label: "Direct Bank Transfer",
      description:
        "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
    },
    {
      id: "cod",
      label: "Cash On Delivery",
      description: "Pay with cash upon delivery.",
    },
  ];

  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Refs para scroll ao erro
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const zipCodeRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchAddress = async () => {
      if (zipCode.replace(/\D/g, "").length === 8) {
        try {
          const response = await axios.get(
            `https://viacep.com.br/ws/${zipCode}/json/`
          );
          if (!response.data.erro) {
            setCountry("Brasil");
            setStreet(response.data.logradouro);
            setCity(response.data.localidade);
            setProvince(response.data.uf);
          }
        } catch (error) {
          console.error("Erro ao buscar CEP:", error);
        }
      }
    };
    fetchAddress();
  }, [zipCode]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }
    if (!zipCode.trim() || zipCode.replace(/\D/g, "").length !== 8) {
      newErrors.zipCode = "ZIP code must be 8 digits.";
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Valid email is required.";
    }

    setErrors(newErrors);

    // Scroll até o primeiro erro
    if (Object.keys(newErrors).length > 0) {
      if (newErrors.firstName && firstNameRef.current) {
        firstNameRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else if (newErrors.lastName && lastNameRef.current) {
        lastNameRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else if (newErrors.zipCode && zipCodeRef.current) {
        zipCodeRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else if (newErrors.email && emailRef.current) {
        emailRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
      return false;
    }

    return true;
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      toast.success("Pedido realizado com sucesso!");

      // Limpar campos após sucesso
      setFirstName("");
      setLastName("");
      setZipCode("");
      setCountry("");
      setStreet("");
      setCity("");
      setProvince("");
      setEmail("");
    }
  };

  return (
    <>
      <SignedIn>
        <div className="flex flex-col min-h-screen">
          <ShopBar breadcrumb={breadcrumb} />

          <main className="flex flex-col md:flex-row justify-center gap-8 px-4 md:px-8 lg:px-16 py-12 max-w-[1440px] mx-auto w-full">
            {/* Checkout Form */}
            <section className="flex-1 max-w-xl w-full">
              <h2 className="text-[36px] font-semibold mb-6">
                Billing details
              </h2>
              <form
                className="flex flex-col"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* First Name & Last Name */}
                <div className="flex gap-[30px] mb-[82px]">
                  <div className="flex flex-col">
                    <label className="text-[16px] font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      ref={firstNameRef}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="border p-3 rounded-[10px] w-[211px] h-[75px]"
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[16px] font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      ref={lastNameRef}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="border p-3 rounded-[10px] w-[211px] h-[75px]"
                    />
                    {errors.lastName && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                      </span>
                    )}
                  </div>
                </div>

                {/* Company Name */}
                <label className="text-[16px] font-medium mb-[41px] text-left">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  className="border p-3 rounded-[10px] w-[453px] h-[75px]"
                />

                {/* ZIP code */}
                <label className="text-[16px] font-medium mt-[41px] mb-[41px] text-left">
                  ZIP code
                </label>
                <input
                  type="text"
                  ref={zipCodeRef}
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="border p-3 rounded-[10px] w-[453px] h-[75px]"
                />
                {errors.zipCode && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.zipCode}
                  </span>
                )}

                {/* Country / Region */}
                <label className="text-[16px] font-medium mt-[41px] mb-[41px] text-left">
                  Country / Region
                </label>
                <input
                  type="text"
                  value={country}
                  readOnly
                  className="border p-3 rounded-[10px] w-[453px] h-[75px] bg-gray-100"
                />

                {/* Street Address */}
                <label className="text-[16px] font-medium mt-[41px] mb-[41px] text-left">
                  Street Address
                </label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="border p-3 rounded-[10px] w-[453px] h-[75px]"
                />

                {/* Town / City */}
                <label className="text-[16px] font-medium mt-[41px] mb-[41px] text-left">
                  Town / City
                </label>
                <input
                  type="text"
                  value={city}
                  readOnly
                  className="border p-3 rounded-[10px] w-[453px] h-[75px] bg-gray-100"
                />

                {/* Province */}
                <label className="text-[16px] font-medium mt-[41px] mb-[41px] text-left">
                  Province
                </label>
                <input
                  type="text"
                  value={province}
                  readOnly
                  className="border p-3 rounded-[10px] w-[453px] h-[75px] bg-gray-100"
                />

                {/* Add-on Address */}
                <label className="text-[16px] font-medium mt-[41px] mb-[41px] text-left">
                  Add-on Address
                </label>
                <input
                  type="text"
                  className="border p-3 rounded-[10px] w-[453px] h-[75px]"
                />

                {/* Email Address */}
                <label className="text-[16px] font-medium mt-[41px] mb-[41px] text-left">
                  Email Address
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border p-3 rounded-[10px] w-[453px] h-[75px]"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </span>
                )}

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
                <span className="text-grayRef text-[16px]">
                  Asgaard Sofa × 1
                </span>
                <span className="text-[16px] font-light">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-[16px]">Subtotal</span>
                <span className="text-[16px] font-light">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between font-bold pt-2 mt-2">
                <span>Total</span>
                <span className="text-yellow-600 text-[24px]">
                  Rs. 250,000.00
                </span>
              </div>

              <hr className="my-4" />

              <div className="mt-6">
                <p className="font-medium mb-2">Payment Method</p>
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className="flex items-start mb-4 gap-2 cursor-pointer"
                  >
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
                        <p className="text-xs text-gray-500 mt-1">
                          {method.description}
                        </p>
                      )}
                    </div>
                  </label>
                ))}
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>

              <button
                onClick={handlePlaceOrder}
                className="w-full border mt-6 py-3 rounded hover:bg-gray-100 transition flex items-center justify-center gap-2 group"
              >
                Place order
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            </aside>
          </main>

          <StoreAdvantages />
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default CheckoutPage;

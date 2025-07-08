import React from "react";
import ShopBar from "../components/common/ShopBar";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import StoreAdvantages from "../components/common/StoreAdvantages";
import { useContactForm } from "../hooks/useContactForm";
import { toast } from "react-toastify";

const ContactPage: React.FC = () => {
  const breadcrumb = ["Home", "Contact"];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useContactForm();

  const onSubmit = () => {
    toast.success("Mensagem enviada com sucesso!");
    reset();
  };

  return (
    <>
      <SignedIn>
        <div className="flex flex-col min-h-screen">
          <ShopBar breadcrumb={breadcrumb} />

          {/* Título centralizado no topo da página */}
          <div className="text-center my-[100px] px-4 font-poppins">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Get In Touch With Us
            </h2>
            <p className="text-gray-500 text-center max-w-[800px] mx-auto leading-relaxed mt-4">
              For More Information About Our Product & Services, Please Feel
              Free To Drop Us <br />
              An Email. Our Staff Always Be There To Help You Out. Do Not
              Hesitate!
            </p>
          </div>

          <main className="max-w-[1440px] mx-auto w-full px-4 md:px-8 lg:px-[240px] pb-12 flex flex-col md:flex-row gap-12 md:gap-[80px]">
            {/* LEFT - Contact Info */}
            <div className="flex flex-col gap-8 max-w-md w-full font-poppins">
              {/* Address */}
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="shrink-0">
                  <svg
                    width="22"
                    height="28"
                    viewBox="0 0 22 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 0.120083C8.08369 0.123473 5.28779 1.26659 3.22564 3.29867C1.16348 5.33075 0.00345217 8.08587 1.17029e-05 10.9597C-0.00348119 13.3081 0.774992 15.5929 2.21601 17.4634C2.21601 17.4634 2.51601 17.8527 2.56501 17.9088L11 27.7118L19.439 17.9039C19.483 17.8517 19.784 17.4634 19.784 17.4634L19.785 17.4605C21.2253 15.5907 22.0034 13.3071 22 10.9597C21.9966 8.08587 20.8365 5.33075 18.7744 3.29867C16.7122 1.26659 13.9163 0.123473 11 0.120083V0.120083ZM11 14.9013C10.2089 14.9013 9.43553 14.6702 8.77773 14.237C8.11993 13.8039 7.60724 13.1883 7.30449 12.4681C7.00174 11.7478 6.92253 10.9553 7.07687 10.1907C7.23121 9.42608 7.61217 8.72374 8.17158 8.17249C8.73099 7.62124 9.44373 7.24583 10.2197 7.09374C10.9956 6.94165 11.7998 7.01971 12.5307 7.31804C13.2616 7.61638 13.8864 8.12159 14.3259 8.76979C14.7654 9.418 15 10.1801 15 10.9597C14.9987 12.0047 14.5768 13.0065 13.827 13.7454C13.0771 14.4843 12.0605 14.9 11 14.9013V14.9013Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[24px] font-medium mb-1">Address</h3>
                  <p className="text-[16px] font-normal leading-relaxed">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="shrink-0">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.6086 21.425L20.5274 16.805C20.2872 16.5867 19.9715 16.4703 19.6471 16.4803C19.3227 16.4903 19.0149 16.626 18.7886 16.8587L15.7974 19.935C15.0774 19.7975 13.6299 19.3462 12.1399 17.86C10.6499 16.3687 10.1986 14.9175 10.0649 14.2025L13.1386 11.21C13.3716 10.9839 13.5075 10.676 13.5176 10.3515C13.5276 10.027 13.411 9.71129 13.1924 9.47124L8.57361 4.39124C8.35492 4.15044 8.05096 4.00437 7.72631 3.98407C7.40165 3.96376 7.08186 4.07082 6.83486 4.28249L4.12236 6.60874C3.90625 6.82564 3.77726 7.11431 3.75986 7.41999C3.74111 7.73249 3.38361 15.135 9.12361 20.8775C14.1311 25.8837 20.4036 26.25 22.1311 26.25C22.3836 26.25 22.5386 26.2425 22.5799 26.24C22.8855 26.2229 23.174 26.0933 23.3899 25.8762L25.7149 23.1625C25.9274 22.9163 26.0352 22.5968 26.0154 22.2721C25.9955 21.9475 25.8495 21.6435 25.6086 21.425V21.425Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[24px] font-medium mb-1">Phone</h3>
                  <p className="text-[16px] font-normal">
                    Mobile: (+84) 546-6789
                  </p>
                  <p className="text-[16px] font-normal">
                    Hotline: (+84) 456-6789
                  </p>
                </div>
              </div>

              {/* Working Time */}
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="shrink-0">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_63_247)">
                      <path
                        d="M23 11.5C23 14.55 21.7884 17.4751 19.6317 19.6317C17.4751 21.7884 14.55 23 11.5 23C8.45001 23 5.52494 21.7884 3.36827 19.6317C1.2116 17.4751 0 14.55 0 11.5C0 8.45001 1.2116 5.52494 3.36827 3.36827C5.52494 1.2116 8.45001 0 11.5 0C14.55 0 17.4751 1.2116 19.6317 3.36827C21.7884 5.52494 23 8.45001 23 11.5V11.5ZM11.5 5.03125C11.5 4.84063 11.4243 4.65781 11.2895 4.52302C11.1547 4.38823 10.9719 4.3125 10.7812 4.3125C10.5906 4.3125 10.4078 4.38823 10.273 4.52302C10.1382 4.65781 10.0625 4.84063 10.0625 5.03125V12.9375C10.0625 13.0642 10.0961 13.1886 10.1597 13.2982C10.2233 13.4077 10.3147 13.4985 10.4247 13.5614L15.456 16.4364C15.6211 16.5256 15.8146 16.5467 15.995 16.4952C16.1755 16.4437 16.3287 16.3236 16.4218 16.1607C16.5149 15.9977 16.5406 15.8048 16.4933 15.6232C16.4461 15.4415 16.3297 15.2856 16.169 15.1886L11.5 12.5206V5.03125Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_63_247">
                        <rect width="23" height="23" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[24px] font-medium mb-1">Working Time</h3>
                  <p className="text-[16px] font-normal">
                    Monday-Friday: 9:00 - 22:00
                  </p>
                  <p className="text-[16px] font-normal">
                    Saturday-Sunday: 9:00 - 22:00
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT - Form */}
            <div className="flex-1 max-w-xl w-full font-poppins">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium mb-[41px]"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className="border p-3 rounded-[10px] w-[528.75px] h-[75px]"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium mt-[41px] mb-[41px]"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="text"
                    {...register("email")}
                    className="border p-3 rounded-[10px] w-[528.75px] h-[75px]"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium mt-[41px] mb-[41px]"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    {...register("subject")}
                    placeholder="This is an optional"
                    className="border p-3 rounded-[10px] w-[528.75px] h-[75px]"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium mt-[41px] mb-[41px]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    placeholder="Hi! I'd like to ask about"
                    rows={4}
                    className="border rounded p-3 resize-none w-[527px] h-[120px]"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-[41px]">
                  <button
                    type="submit"
                    className="bg-yellow-700 hover:bg-yellow-800 text-white rounded transition text-sm md:text-base w-[237px] h-[55px] cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
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

export default ContactPage;

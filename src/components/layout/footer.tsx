import { useEmailForm } from "../../hooks/useEmailForm";

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useEmailForm();

  const onSubmit = (data: { email: string }) => {
    console.log("E-mail enviado:", data.email);
    reset();
  };

  return (
    <footer className="bg-white w-full border-t font-poppins text-[16px] text-black">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 py-12 flex flex-col gap-12 lg:flex-row lg:justify-between lg:h-[505px]">
        {/* Coluna 1 */}
        <div className="max-w-sm">
          <h2 className="text-xl font-bold mb-10">Furniro.</h2>
          <p className="text-gray3 mb-1">
            400 University Drive Suite 200 Coral Gables,
          </p>
          <p className="text-gray3 mb-10">FL 33134 USA</p>

          <div className="flex gap-px">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/compass.uol/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center">
                {
                  <svg
                    width="62"
                    height="62"
                    viewBox="0 0 62 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_2105_2903)">
                      <circle cx="31" cy="27" r="17" fill="white" />
                    </g>
                    <path
                      d="M32.9985 22.9925H34.094V21.0845C33.905 21.0585 33.255 21 32.498 21C30.9185 21 29.8365 21.9935 29.8365 23.8195V25.5H28.0935V27.633H29.8365V33H31.9735V27.6335H33.646L33.9115 25.5005H31.973V24.031C31.9735 23.4145 32.1395 22.9925 32.9985 22.9925Z"
                      fill="black"
                    />
                    <defs>
                      <filter
                        id="filter0_d_2105_2903"
                        x="0"
                        y="0"
                        width="62"
                        height="62"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="7" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2105_2903"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2105_2903"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                }
              </div>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/compass.uol/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center">
                {
                  <svg
                    width="62"
                    height="62"
                    viewBox="0 0 62 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_2105_2907)">
                      <circle cx="31" cy="27" r="17" fill="white" />
                    </g>
                    <g clipPath="url(#clip0_2105_2907)">
                      <path
                        d="M34.481 20H28.519C26.5786 20 25 21.5786 25 23.519V29.4811C25 31.4214 26.5786 33 28.519 33H34.4811C36.4214 33 38 31.4214 38 29.4811V23.519C38 21.5786 36.4214 20 34.481 20V20ZM37.2379 29.4811C37.2379 31.0012 36.0012 32.2379 34.481 32.2379H28.519C26.9988 32.2379 25.7621 31.0012 25.7621 29.4811V23.519C25.7621 21.9988 26.9988 20.7621 28.519 20.7621H34.4811C36.0012 20.7621 37.2379 21.9988 37.2379 23.519V29.4811Z"
                        fill="black"
                      />
                      <path
                        d="M31.5 22.9453C29.54 22.9453 27.9454 24.5399 27.9454 26.4999C27.9454 28.4599 29.54 30.0545 31.5 30.0545C33.46 30.0545 35.0546 28.4599 35.0546 26.4999C35.0546 24.5399 33.46 22.9453 31.5 22.9453ZM31.5 29.2924C29.9603 29.2924 28.7075 28.0397 28.7075 26.4999C28.7075 24.9602 29.9603 23.7074 31.5 23.7074C33.0398 23.7074 34.2925 24.9602 34.2925 26.4999C34.2925 28.0397 33.0398 29.2924 31.5 29.2924Z"
                        fill="black"
                      />
                      <path
                        d="M35.1396 21.6831C34.5603 21.6831 34.0892 22.1543 34.0892 22.7334C34.0892 23.3127 34.5603 23.7839 35.1396 23.7839C35.7188 23.7839 36.19 23.3127 36.19 22.7334C36.19 22.1542 35.7188 21.6831 35.1396 21.6831ZM35.1396 23.0217C34.9807 23.0217 34.8513 22.8923 34.8513 22.7334C34.8513 22.5745 34.9807 22.4452 35.1396 22.4452C35.2986 22.4452 35.4279 22.5745 35.4279 22.7334C35.4279 22.8923 35.2986 23.0217 35.1396 23.0217Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_2105_2907"
                        x="0"
                        y="0"
                        width="62"
                        height="62"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="7" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2105_2907"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2105_2907"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_2105_2907">
                        <rect
                          width="13"
                          height="13"
                          fill="white"
                          transform="translate(25 20)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                }
              </div>
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com/compassuol/status/1432387715027374087"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center">
                {
                  <svg
                    width="62"
                    height="62"
                    viewBox="0 0 62 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_2105_2914)">
                      <circle cx="31" cy="27" r="17" fill="white" />
                    </g>
                    <path
                      d="M37 23.4692C36.5166 23.6812 36.0014 23.8218 35.4644 23.8901C36.0169 23.5602 36.4386 23.0418 36.6368 22.417C36.1217 22.7241 35.5529 22.9411 34.9468 23.0621C34.4577 22.5413 33.7606 22.2188 33.0001 22.2188C31.5246 22.2188 30.3367 23.4164 30.3367 24.8846C30.3367 25.0958 30.3546 25.2989 30.3984 25.4923C28.1828 25.3842 26.2222 24.3223 24.9051 22.7046C24.6752 23.1036 24.5403 23.5602 24.5403 24.0518C24.5403 24.9748 25.0156 25.7929 25.7241 26.2666C25.2959 26.2585 24.8759 26.1342 24.52 25.9384C24.52 25.9465 24.52 25.9571 24.52 25.9676C24.52 27.2627 25.4438 28.3385 26.6552 28.5863C26.4383 28.6456 26.2019 28.6741 25.9565 28.6741C25.7859 28.6741 25.6136 28.6643 25.4519 28.6286C25.7972 29.684 26.7771 30.4599 27.9423 30.4851C27.0355 31.1944 25.8842 31.6218 24.6378 31.6218C24.4193 31.6218 24.2096 31.6121 24 31.5852C25.1806 32.3466 26.5797 32.7812 28.0885 32.7812C32.9928 32.7812 35.674 28.7188 35.674 25.1974C35.674 25.0796 35.6699 24.9658 35.6643 24.8529C36.1932 24.4775 36.6376 24.0087 37 23.4692Z"
                      fill="black"
                    />
                    <defs>
                      <filter
                        id="filter0_d_2105_2914"
                        x="0"
                        y="0"
                        width="62"
                        height="62"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="7" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2105_2914"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2105_2914"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                }
              </div>
            </a>
            {/* LinkedIn */}
            <a
              href="https://br.linkedin.com/company/compass-uol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center">
                {
                  <svg
                    width="62"
                    height="62"
                    viewBox="0 0 62 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_2105_2921)">
                      <circle cx="31" cy="27" r="17" fill="white" />
                    </g>
                    <g clipPath="url(#clip0_2105_2921)">
                      <path
                        d="M35.9972 32V31.9996H36V27.9653C36 25.9917 35.5751 24.4714 33.2678 24.4714C32.1587 24.4714 31.4143 25.0801 31.1105 25.6571H31.0784V24.6557H28.8907V31.9996H31.1687V28.3631C31.1687 27.4057 31.3502 26.4799 32.5359 26.4799C33.7042 26.4799 33.7216 27.5725 33.7216 28.4246V32H35.9972Z"
                        fill="black"
                      />
                      <path
                        d="M25.1815 24.656H27.4622V31.9999H25.1815V24.656Z"
                        fill="black"
                      />
                      <path
                        d="M26.3209 21C25.5917 21 25 21.5917 25 22.3209C25 23.0501 25.5917 23.6542 26.3209 23.6542C27.0501 23.6542 27.6418 23.0501 27.6418 22.3209C27.6414 21.5917 27.0497 21 26.3209 21V21Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_2105_2921"
                        x="0"
                        y="0"
                        width="62"
                        height="62"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="7" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2105_2921"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2105_2921"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_2105_2921">
                        <rect
                          width="11"
                          height="11"
                          fill="white"
                          transform="translate(25 21)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                }
              </div>
            </a>
          </div>
        </div>

        {/* Coluna 2 */}
        <div>
          <h3 className="font-semibold mb-10 text-gray3">Links</h3>
          <ul className="space-y-10 font-medium">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div>
          <h3 className="font-semibold mb-10 text-gray3">Help</h3>
          <ul className="space-y-10 font-medium">
            <li>
              <a href="#" className="hover:underline">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 4 - Newsletter */}
        <div>
          <h3 className="font-semibold mb-8 text-gray3">Newsletter</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col sm:flex-row sm:items-end gap-4"
          >
            <div className="relative w-full sm:w-[220px]">
              <input
                type="text"
                {...register("email")}
                placeholder="Enter Your Email Address"
                className="border-b border-black bg-transparent py-1 text-sm placeholder-gray-500 focus:outline-none w-full"
              />
              {errors.email && (
                <span className="absolute left-0 -bottom-5 text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="border-b border-black bg-transparent py-1 text-sm font-semibold text-black focus:outline-none w-max"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Rodapé Inferior */}
      <div className="border-t border-gray-300 mt-8 px-4 md:px-[100px] py-4">
        <p className="text-xs text-black">2023 Furniro. All rights reserved</p>
      </div>
    </footer>
  );
}

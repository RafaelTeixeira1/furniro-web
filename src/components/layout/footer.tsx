export default function Footer() {
  return (
    <footer className="bg-white w-full flex justify-center border-t">
      <div className="relative w-[1440px] h-[505px]">
        {/* Coluna 1 */}
        <div className="absolute left-[100px] top-[48px] w-[300px]">
          <h2 className="text-xl font-bold mb-4">Furniro.</h2>
          <p className="text-gray-600 mb-2">400 University Drive Suite 200 Coral Gables,</p>
          <p className="text-gray-600 mb-4">FL 33134 USA</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <svg width="50" height="50" viewBox="0 0 62 62" fill="none">
                <g filter="url(#fb)">
                  <circle cx="31" cy="27" r="17" fill="white" />
                </g>
                <path d="M32.9985 22.9925H34.094V21.0845C33.905 21.0585 33.255 21 32.498 21C30.9185 21 29.8365 21.9935 29.8365 23.8195V25.5H28.0935V27.633H29.8365V33H31.9735V27.6335H33.646L33.9115 25.5005H31.973V24.031C31.9735 23.4145 32.1395 22.9925 32.9985 22.9925Z" fill="black" />
                <defs>
                  <filter id="fb" x="0" y="0" width="62" height="62">
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="7" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend in="SourceGraphic" result="shape" />
                  </filter>
                </defs>
              </svg>
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <svg width="50" height="50" viewBox="0 0 62 62" fill="none">
                <g filter="url(#ig)">
                  <circle cx="31" cy="27" r="17" fill="white" />
                </g>
                <g clipPath="url(#clip0)">
                  <path d="M34.481 20H28.519C26.5786 20 25 21.5786 25 23.519V29.4811C25 31.4214 26.5786 33 28.519 33H34.4811C36.4214 33 38 31.4214 38 29.4811V23.519C38 21.5786 36.4214 20 34.481 20ZM31.5 30.0545C29.54 30.0545 27.9454 28.4599 27.9454 26.4999C27.9454 24.5399 29.54 22.9453 31.5 22.9453C33.46 22.9453 35.0546 24.5399 35.0546 26.4999C35.0546 28.4599 33.46 30.0545 31.5 30.0545ZM35.1396 23.7839C34.5603 23.7839 34.0892 23.3127 34.0892 22.7334C34.0892 22.1543 34.5603 21.6831 35.1396 21.6831C35.7188 21.6831 36.19 22.1543 36.19 22.7334C36.19 23.3127 35.7188 23.7839 35.1396 23.7839Z" fill="black" />
                </g>
                <defs>
                  <filter id="ig" x="0" y="0" width="62" height="62">
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="7" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend in="SourceGraphic" result="shape" />
                  </filter>
                  <clipPath id="clip0">
                    <rect width="13" height="13" fill="white" transform="translate(25 20)" />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <svg width="50" height="50" viewBox="0 0 62 62" fill="none">
                <g filter="url(#tw)">
                  <circle cx="31" cy="27" r="17" fill="white" />
                </g>
                <path d="M37 23.4692C36.5166 23.6812 36.0014 23.8218 35.4644 23.8901C36.0169 23.5602 36.4386 23.0418 36.6368 22.417C36.1217 22.7241 35.5529 22.9411 34.9468 23.0621C34.4577 22.5413 33.7606 22.2188 33.0001 22.2188C31.5246 22.2188 30.3367 23.4164 30.3367 24.8846C30.3367 25.0958 30.3546 25.2989 30.3984 25.4923C28.1828 25.3842 26.2222 24.3223 24.9051 22.7046C24.6752 23.1036 24.5403 23.5602 24.5403 24.0518C24.5403 24.9748 25.0156 25.7929 25.7241 26.2666C25.2959 26.2585 24.8759 26.1342 24.52 25.9384V25.9676C24.52 27.2627 25.4438 28.3385 26.6552 28.5863C26.4383 28.6456 26.2019 28.6741 25.9565 28.6741C25.7859 28.6741 25.6136 28.6643 25.4519 28.6286C25.7972 29.684 26.7771 30.4599 27.9423 30.4851C27.0355 31.1944 25.8842 31.6218 24.6378 31.6218C24.4193 31.6218 24.2096 31.6121 24 31.5852C25.1806 32.3466 26.5797 32.7812 28.0885 32.7812C32.9928 32.7812 35.674 28.7188 35.674 25.1974C35.674 25.0796 35.6699 24.9658 35.6643 24.8529C36.1932 24.4775 36.6376 24.0087 37 23.4692Z" fill="black" />
                <defs>
                  <filter id="tw" x="0" y="0" width="62" height="62">
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="7" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend in="SourceGraphic" result="shape" />
                  </filter>
                </defs>
              </svg>
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <svg width="50" height="50" viewBox="0 0 62 62" fill="none">
                <g filter="url(#li)">
                  <circle cx="31" cy="27" r="17" fill="white" />
                </g>
                <g clipPath="url(#clip1)">
                  <path d="M35.9972 32V27.9653C35.9972 25.9917 35.5751 24.4714 33.2678 24.4714C32.1587 24.4714 31.4143 25.0801 31.1105 25.6571V24.6557H28.8907V32H31.1687V28.3631C31.1687 27.4057 31.3502 26.4799 32.5359 26.4799C33.7042 26.4799 33.7216 27.5725 33.7216 28.4246V32H35.9972Z" fill="black"/>
                  <path d="M25.1815 24.656H27.4622V32H25.1815V24.656Z" fill="black"/>
                  <path d="M26.3209 21C25.5917 21 25 21.5917 25 22.3209C25 23.0501 25.5917 23.6542 26.3209 23.6542C27.0501 23.6542 27.6418 23.0501 27.6418 22.3209C27.6414 21.5917 27.0497 21 26.3209 21Z" fill="black"/>
                </g>
                <defs>
                  <filter id="li" x="0" y="0" width="62" height="62">
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="7" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend in="SourceGraphic" result="shape" />
                  </filter>
                  <clipPath id="clip1">
                    <rect width="11" height="11" fill="white" transform="translate(25 21)" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>

        {/* Coluna 2 */}
        <div className="absolute left-[523px] top-[48px]">
          <h3 className="font-semibold mb-10" style={{ color: '#9f9f9f' }}>Links</h3>
          <ul className="space-y-10">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div className="absolute left-[735px] top-[48px]">
          <h3 className="font-semibold mb-10" style={{ color: '#9f9f9f' }}>Help</h3>
          <ul className="space-y-10">
            <li><a href="#" className="hover:underline">Payment Options</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Coluna 4 */}
        <div className="absolute left-[947px] top-[48px]">
          <h3 className="font-semibold mb-6" style={{ color: '#9f9f9f' }}>Newsletter</h3>
          <form className="flex items-end border-b border-gray-400 w-max">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="py-2 pr-4 bg-transparent text-sm placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="text-sm font-semibold text-gray-700 border-none bg-transparent pb-1 focus:outline-none hover:underline"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
        
        {/* Rodapé Inferior */}
        <div className="absolute bottom-4 w-full text-left text-xs text-gray-500 border-t pt-4 pl-[100px]">
          2023 Furniro. All rights reserved
        </div>
      </div>
    </footer>
  );
}

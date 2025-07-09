const logo = "https://furniro-web-imagens.s3.us-east-2.amazonaws.com/images/assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

interface NavbarProps {
  openCart: () => void;
  isCartOpen: boolean;
}

const Navbar = ({ openCart, isCartOpen }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 ${
        isCartOpen ? "bg-gray-200/80" : "bg-white"
      } border-b border-lightGray py-4 shadow-sm font-poppins h-[100px]`}
    >
      <div className="w-full flex items-center justify-between h-full px-0 md:mx-0">
        {/* Logo */}
        <div className="pl-[20px] md:pl-[54px]">
          <Link to="/">
            <img
              src={logo}
              alt="Furniro"
              className="w-30 h-auto object-contain !w-30"
            />
          </Link>
        </div>

        {/* Ícones + menu sanduíche (MOBILE) */}
        <div className="relative md:hidden flex-1 h-full">
          <div className="absolute inset-0 flex justify-center items-center gap-3 -translate-x-[30px]">
            {/* Ícone Usuário (Clerk) */}
            <div className="flex items-center justify-center h-6 w-6 cursor-pointer hover:scale-105 transition-transform duration-200">
              <SignedOut>
                <SignInButton mode="modal">
                  <button>
                    <svg
                      width="24"
                      height="19"
                      viewBox="0 0 24 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 9.33333V3.5H23.3333V10.5H21M21 15.1667H23.3333V12.8333H21M9.33333 10.5C12.4483 10.5 18.6667 12.0633 18.6667 15.1667V18.6667H0V15.1667C0 12.0633 6.21833 10.5 9.33333 10.5ZM9.33333 0C10.571 0 11.758 0.491665 12.6332 1.36683C13.5083 2.242 14 3.42899 14 4.66667C14 5.90434 13.5083 7.09133 12.6332 7.9665C11.758 8.84167 10.571 9.33333 9.33333 9.33333C8.09566 9.33333 6.90867 8.84167 6.0335 7.9665C5.15833 7.09133 4.66667 5.90434 4.66667 4.66667C4.66667 3.42899 5.15833 2.242 6.0335 1.36683C6.90867 0.491665 8.09566 0 9.33333 0ZM9.33333 12.7167C5.86833 12.7167 2.21667 14.42 2.21667 15.1667V16.45H16.45V15.1667C16.45 14.42 12.7983 12.7167 9.33333 12.7167ZM9.33333 2.21667C8.68355 2.21667 8.06039 2.47479 7.60092 2.93425C7.14146 3.39372 6.88333 4.01689 6.88333 4.66667C6.88333 5.31645 7.14146 5.93961 7.60092 6.39908C8.06039 6.85854 8.68355 7.11667 9.33333 7.11667C9.98311 7.11667 10.6063 6.85854 11.0657 6.39908C11.5252 5.93961 11.7833 5.31645 11.7833 4.66667C11.7833 4.01689 11.5252 3.39372 11.0657 2.93425C10.6063 2.47479 9.98311 2.21667 9.33333 2.21667Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>

            {/* Ícone Carrinho (Mobile) */}
            <button onClick={openCart}>
              <div className="flex items-center justify-center h-6 w-6 cursor-pointer hover:scale-105 transition-transform duration-200">
                {/* Cole seu SVG do carrinho aqui */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.2354 19.1926H8.95225L9.76982 17.5273L23.3542 17.5027C23.8136 17.5027 24.2073 17.1746 24.2894 16.7207L26.1706 6.19063C26.2198 5.91445 26.146 5.63008 25.9655 5.41406C25.8763 5.30775 25.7651 5.22211 25.6395 5.16309C25.5139 5.10407 25.377 5.07308 25.2382 5.07227L7.95693 5.01484L7.80928 4.32031C7.71631 3.87734 7.31709 3.55469 6.86318 3.55469H2.63857C2.38258 3.55469 2.13707 3.65638 1.95605 3.8374C1.77503 4.01841 1.67334 4.26393 1.67334 4.51992C1.67334 4.77592 1.77503 5.02143 1.95605 5.20245C2.13707 5.38346 2.38258 5.48516 2.63857 5.48516H6.08115L6.72646 8.55313L8.31514 16.2449L6.26982 19.5836C6.16361 19.727 6.09963 19.8972 6.08514 20.075C6.07064 20.2528 6.1062 20.4312 6.18779 20.5898C6.35186 20.9152 6.68271 21.1203 7.04912 21.1203H8.76631C8.40023 21.6065 8.20249 22.1988 8.20303 22.8074C8.20303 24.3551 9.46084 25.6129 11.0085 25.6129C12.5562 25.6129 13.814 24.3551 13.814 22.8074C13.814 22.1977 13.6116 21.6043 13.2507 21.1203H17.6558C17.2897 21.6065 17.0919 22.1988 17.0925 22.8074C17.0925 24.3551 18.3503 25.6129 19.8979 25.6129C21.4456 25.6129 22.7034 24.3551 22.7034 22.8074C22.7034 22.1977 22.5011 21.6043 22.1401 21.1203H25.2382C25.7687 21.1203 26.2034 20.6883 26.2034 20.1551C26.2018 19.8994 26.0992 19.6546 25.9178 19.4743C25.7365 19.294 25.4912 19.1927 25.2354 19.1926V19.1926ZM8.35889 6.91797L24.1034 6.96992L22.5612 15.6051L10.1937 15.627L8.35889 6.91797ZM11.0085 23.6715C10.5327 23.6715 10.1444 23.2832 10.1444 22.8074C10.1444 22.3316 10.5327 21.9434 11.0085 21.9434C11.4843 21.9434 11.8726 22.3316 11.8726 22.8074C11.8726 23.0366 11.7815 23.2564 11.6195 23.4184C11.4574 23.5805 11.2377 23.6715 11.0085 23.6715V23.6715ZM19.8979 23.6715C19.4222 23.6715 19.0339 23.2832 19.0339 22.8074C19.0339 22.3316 19.4222 21.9434 19.8979 21.9434C20.3737 21.9434 20.762 22.3316 20.762 22.8074C20.762 23.0366 20.671 23.2564 20.5089 23.4184C20.3469 23.5805 20.1271 23.6715 19.8979 23.6715V23.6715Z"
                    fill="black"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* Botão menu sanduíche */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Navegação Desktop/Tablet */}
        <nav className="hidden md:flex gap-10 text-gray1 font-medium text-sm font-poppins">
          <Link
            to="/"
            className="hover:text-primary transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="hover:text-primary transition-colors duration-300"
          >
            Shop
          </Link>
          <span className="text-gray1 cursor-default hover:text-primary transition-colors duration-300">
            About
          </span>
          <Link
            to="/contact"
            className="hover:text-primary transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Ícones Desktop/Tablet */}
        <div className="pr-[100px] hidden md:flex gap-6 text-gray1 text-base items-center">
          <div className="flex items-center justify-center h-6 w-6">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="cursor-pointer hover:scale-105 transition-transform duration-200">
                  {/* Seu SVG do usuário */}
                  <svg
                    width="24"
                    height="19"
                    viewBox="0 0 24 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 9.33333V3.5H23.3333V10.5H21M21 15.1667H23.3333V12.8333H21M9.33333 10.5C12.4483 10.5 18.6667 12.0633 18.6667 15.1667V18.6667H0V15.1667C0 12.0633 6.21833 10.5 9.33333 10.5ZM9.33333 0C10.571 0 11.758 0.491665 12.6332 1.36683C13.5083 2.242 14 3.42899 14 4.66667C14 5.90434 13.5083 7.09133 12.6332 7.9665C11.758 8.84167 10.571 9.33333 9.33333 9.33333C8.09566 9.33333 6.90867 8.84167 6.0335 7.9665C5.15833 7.09133 4.66667 5.90434 4.66667 4.66667C4.66667 3.42899 5.15833 2.242 6.0335 1.36683C6.90867 0.491665 8.09566 0 9.33333 0ZM9.33333 12.7167C5.86833 12.7167 2.21667 14.42 2.21667 15.1667V16.45H16.45V15.1667C16.45 14.42 12.7983 12.7167 9.33333 12.7167ZM9.33333 2.21667C8.68355 2.21667 8.06039 2.47479 7.60092 2.93425C7.14146 3.39372 6.88333 4.01689 6.88333 4.66667C6.88333 5.31645 7.14146 5.93961 7.60092 6.39908C8.06039 6.85854 8.68355 7.11667 9.33333 7.11667C9.98311 7.11667 10.6063 6.85854 11.0657 6.39908C11.5252 5.93961 11.7833 5.31645 11.7833 4.66667C11.7833 4.01689 11.5252 3.39372 11.0657 2.93425C10.6063 2.47479 9.98311 2.21667 9.33333 2.21667Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Ícone Carrinho (Desktop) */}
          <button onClick={openCart}>
            <div className="flex items-center justify-center h-6 w-6 cursor-pointer hover:scale-105 transition-transform duration-200">
              {/* Cole seu SVG do carrinho aqui */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.2354 19.1926H8.95225L9.76982 17.5273L23.3542 17.5027C23.8136 17.5027 24.2073 17.1746 24.2894 16.7207L26.1706 6.19063C26.2198 5.91445 26.146 5.63008 25.9655 5.41406C25.8763 5.30775 25.7651 5.22211 25.6395 5.16309C25.5139 5.10407 25.377 5.07308 25.2382 5.07227L7.95693 5.01484L7.80928 4.32031C7.71631 3.87734 7.31709 3.55469 6.86318 3.55469H2.63857C2.38258 3.55469 2.13707 3.65638 1.95605 3.8374C1.77503 4.01841 1.67334 4.26393 1.67334 4.51992C1.67334 4.77592 1.77503 5.02143 1.95605 5.20245C2.13707 5.38346 2.38258 5.48516 2.63857 5.48516H6.08115L6.72646 8.55313L8.31514 16.2449L6.26982 19.5836C6.16361 19.727 6.09963 19.8972 6.08514 20.075C6.07064 20.2528 6.1062 20.4312 6.18779 20.5898C6.35186 20.9152 6.68271 21.1203 7.04912 21.1203H8.76631C8.40023 21.6065 8.20249 22.1988 8.20303 22.8074C8.20303 24.3551 9.46084 25.6129 11.0085 25.6129C12.5562 25.6129 13.814 24.3551 13.814 22.8074C13.814 22.1977 13.6116 21.6043 13.2507 21.1203H17.6558C17.2897 21.6065 17.0919 22.1988 17.0925 22.8074C17.0925 24.3551 18.3503 25.6129 19.8979 25.6129C21.4456 25.6129 22.7034 24.3551 22.7034 22.8074C22.7034 22.1977 22.5011 21.6043 22.1401 21.1203H25.2382C25.7687 21.1203 26.2034 20.6883 26.2034 20.1551C26.2018 19.8994 26.0992 19.6546 25.9178 19.4743C25.7365 19.294 25.4912 19.1927 25.2354 19.1926V19.1926ZM8.35889 6.91797L24.1034 6.96992L22.5612 15.6051L10.1937 15.627L8.35889 6.91797ZM11.0085 23.6715C10.5327 23.6715 10.1444 23.2832 10.1444 22.8074C10.1444 22.3316 10.5327 21.9434 11.0085 21.9434C11.4843 21.9434 11.8726 22.3316 11.8726 22.8074C11.8726 23.0366 11.7815 23.2564 11.6195 23.4184C11.4574 23.5805 11.2377 23.6715 11.0085 23.6715V23.6715ZM19.8979 23.6715C19.4222 23.6715 19.0339 23.2832 19.0339 22.8074C19.0339 22.3316 19.4222 21.9434 19.8979 21.9434C20.3737 21.9434 20.762 22.3316 20.762 22.8074C20.762 23.0366 20.671 23.2564 20.5089 23.4184C20.3469 23.5805 20.1271 23.6715 19.8979 23.6715V23.6715Z"
                  fill="black"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pt-2 pb-4 space-y-2 text-gray1 font-medium text-sm font-poppins">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-primary transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/shop"
            onClick={() => setIsOpen(false)}
            className="block hover:text-primary transition-colors duration-300"
          >
            Shop
          </Link>
          <span className="block cursor-default hover:text-primary transition-colors duration-300">
            About
          </span>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-primary transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartOverlay from "./CartOverlay";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { cartItems = [], removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      item.product.price * item.quantity * (1 - item.product.discount / 100),
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-[calc(100vh-40px)] w-[417px] bg-white shadow-lg transform transition-transform duration-300 z-50 border-l border-gray-200 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-6 relative">
        <div>
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <div className="mt-7 border-t border-lightGray w-70 mx-auto" />
        </div>
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="transition hover:opacity-70"
        >
          <span className="sr-only">Fechar</span>
          <svg
            width="17"
            height="19"
            viewBox="0 0 17 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.11047 9.6734C6.16563 9.6181 6.23115 9.57424 6.30328 9.5443C6.37542 9.51437 6.45275 9.49896 6.53085 9.49896C6.60894 9.49896 6.68628 9.51437 6.75841 9.5443C6.83055 9.57424 6.89607 9.6181 6.95122 9.6734L8.3121 11.0355L9.67297 9.6734C9.78446 9.56191 9.93568 9.49927 10.0933 9.49927C10.251 9.49927 10.4022 9.56191 10.5137 9.6734C10.6252 9.78489 10.6878 9.9361 10.6878 10.0938C10.6878 10.2514 10.6252 10.4027 10.5137 10.5141L9.15166 11.875L10.5137 13.2359C10.6252 13.3474 10.6878 13.4986 10.6878 13.6563C10.6878 13.8139 10.6252 13.9652 10.5137 14.0766C10.4022 14.1881 10.251 14.2508 10.0933 14.2508C9.93568 14.2508 9.78446 14.1881 9.67297 14.0766L8.3121 12.7146L6.95122 14.0766C6.83973 14.1881 6.68852 14.2508 6.53085 14.2508C6.37318 14.2508 6.22196 14.1881 6.11047 14.0766C5.99898 13.9652 5.93635 13.8139 5.93635 13.6563C5.93635 13.4986 5.99898 13.3474 6.11047 13.2359L7.47253 11.875L6.11047 10.5141C6.05518 10.459 6.01131 10.3935 5.98137 10.3213C5.95144 10.2492 5.93604 10.1719 5.93604 10.0938C5.93604 10.0157 5.95144 9.93834 5.98137 9.86621C6.01131 9.79407 6.05518 9.72855 6.11047 9.6734Z"
              fill="#9F9F9F"
            />
            <path
              d="M8.3125 1.1875C9.09986 1.1875 9.85497 1.50028 10.4117 2.05703C10.9685 2.61378 11.2812 3.36889 11.2812 4.15625V4.75H5.34375V4.15625C5.34375 3.36889 5.65653 2.61378 6.21328 2.05703C6.77003 1.50028 7.52514 1.1875 8.3125 1.1875ZM12.4688 4.75V4.15625C12.4688 3.05394 12.0309 1.99679 11.2514 1.21734C10.472 0.437889 9.41481 0 8.3125 0C7.21019 0 6.15304 0.437889 5.37359 1.21734C4.59414 1.99679 4.15625 3.05394 4.15625 4.15625V4.75H0V16.625C0 17.2549 0.250223 17.859 0.695621 18.3044C1.14102 18.7498 1.74511 19 2.375 19H14.25C14.8799 19 15.484 18.7498 15.9294 18.3044C16.3748 17.859 16.625 17.2549 16.625 16.625V4.75H12.4688ZM1.1875 5.9375H15.4375V16.625C15.4375 16.9399 15.3124 17.242 15.0897 17.4647C14.867 17.6874 14.5649 17.8125 14.25 17.8125H2.375C2.06006 17.8125 1.75801 17.6874 1.53531 17.4647C1.31261 17.242 1.1875 16.9399 1.1875 16.625V5.9375Z"
              fill="#9F9F9F"
            />
          </svg>
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-4 px-6 pb-4 overflow-y-auto h-[calc(100%-200px)]">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Seu carrinho está vazio.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.product.id}
              className="flex gap-3 items-center border-b pb-2"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium">{item.product.name}</h3>
                <p className="text-xs text-gray-500">
                  {item.quantity} x{" "}
                  <span className="text-yellow-700 font-semibold">
                    Rp {item.product.price.toLocaleString()}
                  </span>
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.product.id)}
                aria-label="Remover"
                className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 hover:bg-red-400 transition"
              >
                <span className="sr-only">Remover</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="px-6 pt-2 pb-6 border-t border-lightGray">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600">Subtotal</span>
          <span className="text-base font-semibold text-yellow-700">
            Rp {subtotal.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between gap-2">
          <Link
            to="/cart"
            className="flex-1 border border-black text-black py-2 rounded-full text-center text-sm hover:bg-black hover:text-white transition"
            onClick={onClose}
          >
            Cart
          </Link>
          <Link
            to="/checkout"
            className="flex-1 border border-black text-black py-2 rounded-full text-center text-sm hover:bg-black hover:text-white transition"
            onClick={onClose}
          >
            Checkout
          </Link>
          <Link
            to="/comparison"
            className="flex-1 border border-black text-black py-2 rounded-full text-center text-sm hover:bg-black hover:text-white transition"
            onClick={onClose}
          >
            Comparison
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;

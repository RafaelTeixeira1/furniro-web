import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ShopBar from "../components/common/ShopBar";
import StoreAdvantages from "../components/common/StoreAdvantages";

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity * (1 - (item.discount ?? 0) / 100),
    0
  );

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div>
      <ShopBar breadcrumb={["Home", "Cart"]} />

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto my-12 px-4 gap-8">
        {/* Cart Table */}
        <div className="flex-1">
          <table className="w-[817px] max-w-full text-left font-poppins">
            <thead>
              <tr className="bg-creamyWhite text-black font-semibold min-h-[55px]">
                <th className="p-3 w-[320px] text-left pl-[140px]">Product</th>
                <th className="p-3 w-[120px] text-right pr-[50px]">Price</th>
                <th className="p-3 w-[120px] text-center">Quantity</th>
                <th className="p-3 w-[120px] text-right pr-[30px]">Subtotal</th>
                <th className="p-3 w-[50px] text-right"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 last:border-b-0 text-base"
                >
                  <td className="p-4 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                      w-[108px] h-[105px] 
                      max-w-[108px] max-h-[105px]
                      object-cover rounded-[8px]
                      flex-shrink-0
                    "
                    />
                    <span className="w-[200px] truncate text-grayRef">{item.name}</span>
                  </td>
                  <td className="p-4 w-[120px] text-right text-grayRef">
                    Rp {item.price.toLocaleString()}
                  </td>
                  <td className="p-4 w-[120px] text-center">
                    <div className="flex items-center justify-center border rounded w-[100px] mx-auto">
                      <button
                        className="px-2"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="px-2 w-[24px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        className="px-2"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-4 w-[120px] text-right text-black">
                    Rp{" "}
                    {(
                      item.price *
                      item.quantity *
                      (1 - (item.discount ?? 0) / 100)
                    ).toLocaleString()}
                  </td>
                  <td className="p-4 w-[50px] text-right">
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-primary hover:text-red-700 transition"
                    >
                      <FaTrash size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart Totals */}
        <div
          className="
            bg-creamyWhite w-[393px] h-[390px]
            pr-8 pb-8 pl-8 pt-[27px]
            flex flex-col items-center justify-between
            ml-auto mr-[50px]
          "
        >
          <h2 className="text-[32px] font-semibold mb-4 text-center">
            Cart Totals
          </h2>
          <div className="flex flex-col gap-4 w-full max-w-[280px]">
            <div className="flex justify-between w-full">
              <span className="text-black font-semibold text-lg">Subtotal</span>
              <span className="text-gray-600 font-semibold text-lg">
                Rp {subtotal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-black font-semibold text-lg">Total</span>
              <span className="text-yellow-700 font-bold text-lg">
                Rp {subtotal.toLocaleString()}
              </span>
            </div>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="
              w-[222px] h-[59px] border border-black 
              rounded-[15px] text-black 
              hover:bg-black hover:text-white 
              transition text-center mt-4
            "
          >
            Check Out
          </button>
        </div>
      </div>

      <StoreAdvantages />
    </div>
  );
};

export default CartPage;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; // ✅ type-only correto

// ✅ Tipagem consistente
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  discount?: number; // ✅ mantido opcional
};

interface CartState {
  items: CartItem[];
}

// ✅ Estado inicial
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    // ✅ Adicionado para persistência de estado
    replaceState: (state, action: PayloadAction<CartState>) => {
      return action.payload;
    },
  },
});

// ✅ Exports organizados
export const { addToCart, removeFromCart, clearCart, updateQuantity, replaceState } = cartSlice.actions;
export default cartSlice.reducer;

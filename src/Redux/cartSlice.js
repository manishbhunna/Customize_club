// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find(item => item.name === product.name);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...product, id: Date.now(), qty: 1 });
      }
    },
    updateQty: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.qty = qty > 0 ? qty : 1;
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, updateQty, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

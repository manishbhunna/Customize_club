// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userdetailsReducer from './userdetails';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    userdetails: userdetailsReducer,
  },
});

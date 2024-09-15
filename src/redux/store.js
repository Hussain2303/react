// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/counter/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import moneyReducer from '../features/moneySlice';

const store = configureStore({
  reducer: {
    money: moneyReducer,
  },
});

export default store;
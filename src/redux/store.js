import { configureStore } from '@reduxjs/toolkit';
import { feedbackSlice } from './feedbackSlice';

export const store = configureStore({
  reducer: feedbackSlice.reducer,
});

import { createSlice } from '@reduxjs/toolkit';

const feedInitialState = {
  good: 0,
  bad: 0,
  neutral: 0,
};

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState: feedInitialState,
  reducers: {
    addGood(state, action) {
      state.good += action.payload;
    },

    addBad(state, action) {
      state.bad += action.payload;
    },

    addNeutral(state, action) {
      state.neutral += action.payload;
    },
    clearFeedback(state) {
      return (state = { good: 0, bad: 0, neutral: 0 });
    },
  },
});

export const { addGood, addBad, addNeutral, clearFeedback } =
  feedbackSlice.actions;

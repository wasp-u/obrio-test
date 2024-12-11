import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Answer {
  step: string;
  question: string;
  answer: string;
}

export interface AnswersState {
  answers: Record<string, Answer>;
  savedStep: string;
}

const initialState: AnswersState = {
  answers: {},
  savedStep: '',
};

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<Answer>) => {
      state.answers[action.payload.step] = action.payload;
    },
    saveStep: (state, action: PayloadAction<string>) => {
      state.savedStep = action.payload;
    },
  },
});

export const { setAnswer, saveStep } = answersSlice.actions;

export default answersSlice.reducer;

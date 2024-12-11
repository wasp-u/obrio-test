import { configureStore } from '@reduxjs/toolkit';
import answersReducer from './slice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      answers: answersReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

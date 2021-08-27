import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authenticationReducer from '../features/Authentication/AuthenticationSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authenticationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type AuthenticationDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

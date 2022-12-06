import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../components/features/counter/counterSlice";
import authReducer from "../components/features/auth/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    logUser: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

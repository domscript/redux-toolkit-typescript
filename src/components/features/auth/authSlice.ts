import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export interface CounterState {
  logUser: boolean;
}

const initialState: CounterState = {
  logUser: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state) => {
      state.logUser = true;
    },
    logout: (state) => {
      state.logUser = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.login)`
export const selectLog = (state: RootState) => state.logUser.logUser;

export default authSlice.reducer;

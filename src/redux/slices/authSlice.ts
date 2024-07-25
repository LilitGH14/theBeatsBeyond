import { DictionaryType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: any;
}

const initialState: AuthState = {
  user:  null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice;

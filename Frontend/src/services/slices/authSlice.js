import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aisum_userInfo: localStorage.getItem("aisum_userInfo")
    ? JSON.parse(localStorage.getItem("aisum_userInfo"))
    : null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.aisum_userInfo = action.payload;
      localStorage.setItem("aisum_userInfo", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.aisum_userInfo = null;
      localStorage.removeItem("aisum_userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

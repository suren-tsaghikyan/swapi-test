import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.user ? JSON.parse(localStorage.user) : null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.reloadUserInfo;
      localStorage.user = JSON.stringify(action.payload.reloadUserInfo);
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

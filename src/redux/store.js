import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./slices/charactersSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    auth: authReducer,
  },
});

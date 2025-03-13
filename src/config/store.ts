import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authApi } from "../api/auth.api";
import { userSlice } from "./authSlice";
import { planApi } from "../api/plan.api";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [planApi.reducerPath]: planApi.reducer,
    auth: userSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(planApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

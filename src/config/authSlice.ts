
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { IUser } from "../interface/IUser.interface";

interface IEmployee {
    id:string;
    first_name:string;
    last_name:string;
    email:string; business:string;
    is_verified:boolean;
    is_active:boolean;
     salary: number;
     phone:string
}

interface IAdmin {
    business_name:string
    currency: string
    email: string
    id: string
    is_active: boolean
    is_verified: boolean
    modules: string[]
    phone: string
}

export interface IInitialState {
  isAuthenticated: boolean;
  user: IAdmin | IEmployee | null;
}

const token = Cookies.get("abacus-token");
const user = localStorage.getItem("abacus-user");
const initialState: IInitialState = {
  isAuthenticated: token ? true : false,
  user: user ? JSON.parse(user!) : undefined,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (
      state,
      action: PayloadAction<any>
    ) => {
      state.user = action.payload.business;
      state.isAuthenticated = !!action.payload.access_token;

      Cookies.set("abacus-token", action.payload.access_token, { expires: 7 });
      Cookies.set("abacus-refresh-token", action.payload.refresh_token, { expires: 5 });
      localStorage.setItem("abacus-user", JSON.stringify(state.user));
    },
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
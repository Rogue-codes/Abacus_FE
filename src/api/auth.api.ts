/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IForm } from "../views/auth/Register";

const BASE_URL = import.meta.env.VITE_APP_API_URL + "";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // prepareHeaders: (headers) => {
    //   const token = localStorage.getItem("@sterling_core_token");
    //   if (token) {
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    register: builder.mutation<
      any,
      IForm
    >({
      query: (payload) => {
        return {
          url: `business/register`,
          method: "POST",
          body: payload,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
    verifyBusiness: builder.mutation<
    any,
    {email:string; otp:string}
  >({
    query: (payload) => {
      return {
        url: `business/verify`,
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      };
    },
  }),

  login: builder.mutation<
    any,
    {email:string; password:string}
  >({
    query: (payload) => {
      return {
        url: `business/login`,
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      };
    },
  }),
    
  }),
});

export const { useRegisterMutation,useVerifyBusinessMutation, useLoginMutation } = authApi;
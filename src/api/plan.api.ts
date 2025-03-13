/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_APP_API_URL + "";

export const planApi = createApi({
  reducerPath: "planApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  tagTypes: ["plan"],
  endpoints: (builder) => ({
    getPlans: builder.query<any, any>({
      query: () => ({
        url: `/plan/all`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["plan"],
    }),

  }),
});

export const { useGetPlansQuery} =
  planApi;
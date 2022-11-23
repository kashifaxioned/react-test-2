import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.anapioficeandfire.com/api/characters",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (x) => `/?page=${x}&pageSize=20`,
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;

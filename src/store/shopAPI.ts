import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Categories, ProductsByCategory, } from "../models/models"

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1/",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<Categories, string>({
      query: () => `categories`,
    }),
    getProductsByCategory: builder.query<ProductsByCategory, number>({
      query: (numberCategory) => `categories/${numberCategory}/products`,
    }),
    getProductsByTitle: builder.query<ProductsByCategory, string>({
      query: (title) => `products/?title=${title}`,
    }),
    createUser: builder.mutation(
      {query:(user) => ({url:`users/`, method:"POST", body:user}) ,}
    )
  }),
});

export const {  useGetCategoriesQuery,
                useGetProductsByCategoryQuery, 
                useLazyGetProductsByTitleQuery,
                useCreateUserMutation } = shopApi;

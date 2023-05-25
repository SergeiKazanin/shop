import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Categories, ProductsByCategory,loginUser,loginUserResp,User,SignFormUser } from "../models/models"

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
    createUser: builder.mutation<User,SignFormUser>(
      {query:(user) => ({url:`users/`, method:"POST", body:user}) ,}
    ),
    loginUser: builder.mutation<loginUserResp,loginUser>(
      {query:(user) => ({url:`auth/login/`, method:"POST", body:user}) ,}
    ),
    getUser: builder.query<User,string>(
      {query:(token) => ({url:`auth/profile`,headers: {Authorization: `Bearer ${token}`}}) ,}
    ),

  }),
});

export const {  useGetCategoriesQuery,
                useGetProductsByCategoryQuery, 
                useLazyGetProductsByTitleQuery,
                useCreateUserMutation,
                useLoginUserMutation,
                useLazyGetUserQuery} = shopApi;

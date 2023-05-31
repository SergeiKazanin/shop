import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, loginUserResp, ProductByCategory,ProductsByCategory } from "../models/models"

const slice = createSlice({
  name: "shop",
  initialState: {
    showForm: false,
    formType: 'login',
    user:{} as User,
    snake: false,
    isLogin: false,
    loginInProcess: false,
    tokenRefr:false
  },
  reducers: {
    toggleForm(state, action: PayloadAction<boolean>) {
      state.showForm = action.payload;
    },
    setIsLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
    setLoginInProcess(state, action: PayloadAction<boolean>) {
      state.loginInProcess = action.payload;
    },
    setTokenRefr(state, action: PayloadAction<boolean>) {
      state.tokenRefr = action.payload;
    },
    toggleTypeForm(state, action: PayloadAction<string>) {
      state.formType = action.payload;
    },
    userAdd(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    userDel(state) {
      state.user = {};
    },
    snakeOn(state, action: PayloadAction<boolean>) {
      state.snake = action.payload;
    },
  },
});

export const actionsShop = slice.actions;
export const sliceReducer = slice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, loginUserResp, ProductByCategory,ProductsByCategory } from "../models/models"

const slice = createSlice({
  name: "shop",
  initialState: {
    showForm: false,
    formType: 'login',
    user:{} as User,
    token:{} as loginUserResp,
    cart:[] as ProductsByCategory,
    snake: false,
  },
  reducers: {
    toggleForm(state, action: PayloadAction<boolean>) {
      state.showForm = action.payload;
    },
    toggleTypeForm(state, action: PayloadAction<string>) {
      state.formType = action.payload;
    },
    tokenAdd(state, action: PayloadAction<loginUserResp>) {
      state.token = action.payload;
    },
    userAdd(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    snakeOn(state, action: PayloadAction<boolean>) {
      state.snake = action.payload;
    },
    addToCart(state, action:PayloadAction<ProductByCategory>){
      let newCart = [...state.cart];
      const found = state.cart.find((el)=>( el.id === action.payload.id));
      
      if (found) {
        newCart = newCart.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity || item.quantity + 1 }
            : item;
        });
      } else newCart.push({ ...action.payload, quantity: 1 });
      
      state.cart = newCart;      
    },
    delToCart(state, action: PayloadAction<ProductByCategory>) {
      state.cart = state.cart.filter((product)=> product.id !== action.payload.id)
    },
  },
});

export const actionsDiction = slice.actions;
export const sliceReducer = slice.reducer;

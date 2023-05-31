import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, loginUserResp, ProductByCategory,ProductsByCategory } from "../models/models"

const slice = createSlice({
  name: "shopLocalStore",
  initialState: {
    token:{} as loginUserResp,
    cart:[] as ProductsByCategory,
  },
  reducers: {
    tokenAdd(state, action: PayloadAction<loginUserResp>) {
      state.token = action.payload;
    },
    tokenDell(state) {
      state.token = {};
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

export const actionsShopLocalSrore = slice.actions;
export const sliceReducerLocalStore = slice.reducer;

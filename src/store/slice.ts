import { createSlice } from "@reduxjs/toolkit";
import { User, loginUserResp, ProductsByCategory,ProductByCategory } from "../models/models"


const slice = createSlice({
  name: "shop",
  initialState: {
    showForm: false,
    formType: 'login',
    user:{} as User,
    token:{} as loginUserResp,
    card:[] as ProductsByCategory,
    snake: false,
  },
  reducers: {
    toggleForm(state, action: {payload:boolean}) {
      state.showForm = action.payload;
    },
    toggleTypeForm(state, action: {payload:string}) {
      state.formType = action.payload;
    },
    tokenAdd(state, action: {payload:loginUserResp}) {
      state.token = action.payload;
    },
    userAdd(state, action: {payload:User}) {
      state.user = action.payload;
    },
    snakeOn(state, action: {payload:boolean}) {
      state.snake = action.payload;
    },
    addToCart(state, action:{payload:ProductByCategory}){
      if(!state.card.find((el)=>( el.id === action.payload.id))){
         state.card.push(action.payload);
      }     
    },
  },
});

export const actionsDiction = slice.actions;
export const sliceReducer = slice.reducer;

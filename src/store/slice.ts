import { createSlice } from "@reduxjs/toolkit";
import { User, loginUserResp } from "../models/models"

const slice = createSlice({
  name: "shop",
  initialState: {
    showForm: false,
    formType: 'login',
    user:{} as User,
    token:{} as loginUserResp,
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
  },
});

export const actionsDiction = slice.actions;
export const sliceReducer = slice.reducer;

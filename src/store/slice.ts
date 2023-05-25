import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "shop",
  initialState: {
    showForm: false,
    formType: 'login',
  },
  reducers: {
    toggleForm(state, action: {payload:boolean}) {
      state.showForm = action.payload;
    },
    toggleTypeForm(state, action: {payload:string}) {
      state.formType = action.payload;
    },
  },
});

export const actionsDiction = slice.actions;
export const sliceReducer = slice.reducer;

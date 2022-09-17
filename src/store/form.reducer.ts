import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  profile_url: "https://picsum.photos/id/1/50/50",
  author: "abc_1",
  content: "UI 테스트는 어떻게 진행하나요",
  createdAt: "2022-03-01",
};

// GET
// const getComments = createAsyncThunk('comment/getComments', async (params: any)=>{
//   const response = await fetch('url', params);
//   return response
// })

// const postComments = createAsyncThunk('comment/postComments', async (params: any) => {
//   const response = await fetch('url', params);
//   return response;
// })

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    resetForm: (state) => {
      state = initialState;
    },
    setForm: (state, action) => {
      state = { ...action.payload };
    },
  },
});

export const { resetForm, setForm } = formSlice.actions;

export default formSlice.reducer;

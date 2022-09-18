import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "../types";
interface FormInputsState {
  inputs: Comment;
}

const initialState: FormInputsState = {
  inputs: {
    id: "",
    profile_url: "",
    author: "",
    content: "",
    createdAt: ""
  }
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    resetForm: state => {
      state.inputs = initialState.inputs;
    },
    setForm: (state, action: PayloadAction<Comment>) => {
      state.inputs = { ...action.payload };
    }
  }
});

export const { resetForm, setForm } = formSlice.actions;

export default formSlice.reducer;

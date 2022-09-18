import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormInputs {
  id: string;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}

export type SubmitMode = "put" | "post";

export interface FormInputsState {
  inputs: FormInputs;
  submitMode: SubmitMode;
}

const initialState: FormInputsState = {
  inputs: {
    id: "",
    profile_url: "",
    author: "",
    content: "",
    createdAt: "",
  },
  submitMode: "post",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    resetForm: (state) => {
      state.inputs = initialState.inputs;
    },
    setForm: (state, action: PayloadAction<FormInputs>) => {
      state.inputs = { ...action.payload };
    },
    setMode: (state, action: PayloadAction<SubmitMode>) => {
      state.submitMode = action.payload;
    },
  },
});

export const { resetForm, setForm, setMode } = formSlice.actions;

export default formSlice.reducer;

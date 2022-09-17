import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormInputs {
  id: string;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}

interface FormInputsState {
  inputs: FormInputs;
}

const initialState: FormInputsState = {
  inputs: {
    id: "",
    profile_url: "",
    author: "",
    content: "",
    createdAt: "",
  },
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
  },
});

export const { resetForm, setForm } = formSlice.actions;

export default formSlice.reducer;

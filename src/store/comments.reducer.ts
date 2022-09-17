/**
 * TODO: async thunk param type 추가할 것
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "localhost:4000",
});

export interface Comment {
  id: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface CommentState {
  comments: Comment[];
  isLoading: boolean;
}

const initialState: CommentState = {
  comments: [],
  isLoading: false,
};

// GET
const getComments = createAsyncThunk("comment/getComments", async () => {
  const response = await axiosClient.get("/comments");
  console.log("get comments: ", response);
  return response;
});

// PUT
const putComments = createAsyncThunk(
  "comment/putCommnets",
  async (comment: Comment) => {
    const response = await axiosClient.put(`/comments/${comment.id}`, comment);
    return response;
  }
);

// POST
const postComments = createAsyncThunk(
  "comment/postComments",
  async (comment: Comment) => {
    const response = await axiosClient.post("/comments", comment);
    return response;
  }
);

// DELETE
const deleteComments = createAsyncThunk(
  "comment/deleteComments",
  async (comment: Comment) => {
    const response = await axiosClient.delete(`/comments/${comment.id}`);
    return response;
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
  extraReducers: (builder) => {
    // GET
    builder.addCase(getComments.pending, (state) => {
      // state를 어떻게 다루냐는 여기서...
    });
    builder.addCase(getComments.fulfilled, (state, action) => {});
    builder.addCase(getComments.rejected, (state, action) => {});
  },
});

// export const { increment, decrement, incrementByAmount } = commentsSlice.actions

export default commentsSlice.reducer;

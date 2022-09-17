/**
 * TODO: async thunk param type 추가할 것
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:4000",
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
export const getComments = createAsyncThunk("comment/getComments", async () => {
  // const response = await axiosClient.get<Comment[]>(
  //   `/comments?_page=${pageNum}&_limit=4&_order=desc&_sort=id`
  // );
  const response = await axiosClient.get(`/comments`);
  // console.log("get comments: ", response);

  return response.data;
});

// PUT
export const putComments = createAsyncThunk(
  "comment/putComments",
  async (comment: Comment) => {
    const response = await axiosClient.put(`/comments/${comment.id}`, comment);
    return response.data;
  }
);

// POST
export const postComments = createAsyncThunk(
  "comment/postComments",
  async (comment: Comment) => {
    const response = await axiosClient.post("/comments", comment);
    return response.data;
  }
);

// DELETE
export const deleteComments = createAsyncThunk(
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
    builder.addCase(getComments.pending, (state, action) => {
      console.log(action);
      state.isLoading = true;
    });
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.comments = [...action.payload];
      state.isLoading = false;
    });
    builder.addCase(getComments.rejected, (state, action) => {
      alert("데이터를 받는데 문제가 발생했습니다...");
      // console.log("state", state.comments);
      console.log(action);
      state.isLoading = false;
    });

    // PUT
    builder.addCase(putComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(putComments.fulfilled, (state, action) => {
      // state.comments = [...action.payload];
      console.log("수정된 데이터", [...action.payload]);
      state.isLoading = false;
    });
    builder.addCase(putComments.rejected, (state, action) => {
      alert("수정에 실패하였습니다.");
      state.isLoading = false;
    });

    // POST
    builder.addCase(postComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postComments.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(postComments.rejected, (state) => {
      alert("댓글 작성에 실패하였습니다.");
      state.isLoading = false;
    });

    // DELETE
    builder.addCase(deleteComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteComments.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteComments.rejected, (state) => {
      alert("댓글 삭제에 실패하였습니다.");
      state.isLoading = false;
    });
  },
});

// export const { increment, decrement, incrementByAmount } = commentsSlice.actions

export default commentsSlice.reducer;

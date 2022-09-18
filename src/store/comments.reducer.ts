/**
 * @TODO 수정버튼 클릭했을 때 setForm활용해서 데이터 채워주기
 * @TODO ??
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Comment } from "../types";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://gugig-json-server.herokuapp.com/";

const axiosClient = axios.create({
  baseURL,
});

export interface CommentState {
  comments: Comment[];
  isLoading: boolean;
  totalCount: number;
  currentPage: number;
}

const initialState: CommentState = {
  comments: [],
  isLoading: false,
  totalCount: 0,
  currentPage: 0,
};

// GET
export const getComments = createAsyncThunk(
  "comment/getComments",
  async (pageNum: number = 1) => {
    const response = await axiosClient.get(
      `/comments?_page=${pageNum}&_limit=4&_order=desc&_sort=id`
    );
    const totalCount = parseInt(response.headers["x-total-count"]);

    return [response.data, totalCount, pageNum];
  }
);

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
  async (comment: Omit<Comment, "id">) => {
    const response = await axiosClient.post("/comments", comment);
    return response.data;
  }
);

// DELETE
export const deleteComments = createAsyncThunk(
  "comment/deleteComments",
  async (id: Comment["id"]) => {
    const response = await axiosClient.delete(`/comments/${id}`);
    return response.data;
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET
    builder.addCase(getComments.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getComments.fulfilled, (state, action) => {
      const [comments, totalCount, currentPage] = action.payload;
      state.comments = comments;
      state.totalCount = totalCount;
      state.isLoading = false;
      state.currentPage = currentPage;
    });
    builder.addCase(getComments.rejected, (state, action) => {
      alert("데이터를 받는데 문제가 발생했습니다...");
      state.isLoading = false;
    });

    // PUT
    builder.addCase(putComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(putComments.fulfilled, (state, action) => {
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

export default commentsSlice.reducer;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commentsReducer from "./comments.reducer";
import formReducer from "./form.reducer";
import logger from "redux-logger";

const reducer = combineReducers({
  form: formReducer,
  comments: commentsReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

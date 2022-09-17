import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commentsReducer from "./comments.reducer";
import formReducer from "./form.reducer";

const reducer = combineReducers({
  form: formReducer,
  commets: commentsReducer,
});

export const store = configureStore({
  reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

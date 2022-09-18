import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commentsReducer from "./comments.reducer";
import formReducer from "./form.reducer";
import logger from "redux-logger";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const reducer = combineReducers({
  form: formReducer,
  comments: commentsReducer,
});

export const store =
  process.env.NODE_ENV === "development"
    ? configureStore({
        reducer,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(logger),
      })
    : configureStore({
        reducer,
        devTools: false,
      });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

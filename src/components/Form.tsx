import React from "react";
import { resetForm, setForm, setMode } from "../store/form.reducer";
import {
  postComments,
  putComments,
  getComments,
} from "../store/comments.reducer";
import { Comment } from "../types";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import styled from "styled-components";

function Form() {
  const { inputs, submitMode } = useSelector((state: RootState) => state.form);
  const { profile_url, author, content, createdAt } = inputs;
  const dispatch = useDispatch();

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.currentTarget;
    dispatch(
      setForm({
        ...inputs,
        [name]: value,
      })
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitMode === "post") {
      const newComment = {
        profile_url,
        author,
        content,
        createdAt,
      };
      dispatch(postComments(newComment));
      dispatch(getComments(1));
    } else if (submitMode === "put") {
      const editedComment: Comment = {
        ...inputs,
        id: inputs.id,
      };
      dispatch(putComments(editedComment));
    }

    dispatch(resetForm());
    dispatch(setMode("post"));
  };

  return (
    <FormStyle>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
          value={profile_url}
        />
        <br />
        <input
          onChange={handleInput}
          type="text"
          name="author"
          placeholder="작성자"
          value={author}
        />
        <br />
        <textarea
          onChange={handleInput}
          name="content"
          placeholder="내용"
          required
          value={content}
        ></textarea>
        <br />
        <input
          onChange={handleInput}
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          value={createdAt}
          required
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

export default Form;

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type="text"] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

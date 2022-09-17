/**
 * TODO| * form reducer으로부터 input에 data binding하기
 * TODO| * submit시 submit mode에 알맞는 api 호출하기 => 해당 api call은 comment reducer에 있다
 * TODO| * 등록/수정 완료 시 input 모두 reset하기 => form reducer에 있음
 */

import React from "react";
import { setForm } from "../store/form.reducer";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import styled from "styled-components";

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

function Form() {
  const { inputs } = useSelector((state: RootState) => state.form);
  const { profile_url, author, content, createdAt } = inputs;
  const dispatch = useDispatch();
  console.log(inputs);

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

  return (
    <FormStyle>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
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

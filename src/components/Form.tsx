/**
 * TODO| * form reducer으로부터 input에 data binding하기
 * TODO| * submit시 submit mode에 알맞는 api 호출하기 => 해당 api call은 comment reducer에 있다
 * TODO| * 등록/수정 완료 시 input 모두 reset하기 => form reducer에 있음
 */

import React, { useState } from "react";
import styled from "styled-components";

// import { submitMode } from "form 슬라이스?"
import axios from "axios";

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
  const [newComments, setNewComments] = useState({
    profile_url: "",
    author: "",
    content: "",
    createdAt: "",
  });

  const saveValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewComments({ ...newComments, [name]: value });
  };

  const sendValue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/comments", { ...newComments })
      .then((res) => console.log(res));
  };
  // const handleSubmit = () => {
  //   if(submitMode === "post") {
  //     // 서버에 post한다
  //   }

  //   if(submitMode === "put") {
  //     // 서버에 put한다
  //   }
  // }

  return (
    <FormStyle>
      {/* <form onSubmit={handleSubmit}> */}
      <form
        onSubmit={(e) => {
          sendValue(e);
        }}
      >
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
          onChange={(e) => {
            saveValue(e);
          }}
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          onChange={(e) => {
            saveValue(e);
          }}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          required
          onChange={(e) => {
            saveValue(e);
          }}
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          required
          onChange={(e) => {
            saveValue(e);
          }}
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

export default Form;

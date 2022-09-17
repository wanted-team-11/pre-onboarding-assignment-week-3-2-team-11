/**
 * TODO| *
 * TODO|
 * TODO|
 */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import { setFormData } from "../store/form.reducer";
// import { setFormData } from "form 리듀서"
import { getComments, Comment } from "../store/comments.reducer";

const CommentStyle = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > a {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

// 임시 데이터 입니다. 코드 작성시 data 부분을 지워주세요
// const data = [
//   {
//     id: 1,
//     profile_url: "https://picsum.photos/id/1/50/50",
//     author: "abc_1",
//     content: "UI 테스트는 어떻게 진행하나요",
//     createdAt: "2020-05-01",
//   },
// ];

// const passDataToForm = (comment) => {
//   setFormData(comment);
// }

export interface IData {
  comments: {
    comments: Comment[];
  };
}

function CommentList() {
  const dispatch = useDispatch();

  const commentData = useSelector<IData, Comment[]>((state) => {
    console.log(state.comments.comments);
    return state.comments.comments;
  });

  useEffect(() => {
    return () => {
      dispatch(getComments());
    };
  }, []);

  return (
    <>
      {commentData.map((comment, key) => (
        <CommentStyle key={key}>
          <img src={comment.profile_url} alt="" />

          {comment.author}

          <CreatedAt>{comment.createdAt}</CreatedAt>

          <Content>{comment.content}</Content>

          {/* <Button onClick={() => passDataToForm(comment)}> */}
          <Button>
            <a>수정</a>
            <a>삭제</a>
          </Button>

          <hr />
        </CommentStyle>
      ))}
    </>
  );
}

export default CommentList;

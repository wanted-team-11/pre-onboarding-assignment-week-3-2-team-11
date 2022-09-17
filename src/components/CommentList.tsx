import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import { setFormData } from "../store/form.reducer";
// import { setFormData } from "form 리듀서"
import {
  getComments,
  Comment,
  deleteComments,
} from "../store/comments.reducer";

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
    return state.comments.comments;
  });

  const onDelete = (id: number) => {
    dispatch(deleteComments(id));
    dispatch(getComments());
  };

  useEffect(() => {
    dispatch(getComments());
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
            <button type="button">수정</button>
            <button
              type="button"
              onClick={() => {
                onDelete(comment.id);
              }}
            >
              삭제
            </button>
          </Button>

          <button type="button">PUT</button>
          <hr />
        </CommentStyle>
      ))}
    </>
  );
}

export default CommentList;

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
  & > button {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store";
import styled from "styled-components";
import { getComments, deleteComments } from "../store/comments.reducer";

import { Comment } from "../types";

import { formSlice, setMode } from "../store/form.reducer";

function CommentList() {
  const dispatch = useAppDispatch();

  const commentData = useAppSelector((state) => state.comments.comments);

  const onDelete = async (id: string) => {
    await dispatch(deleteComments(id));
    dispatch(getComments());
  };

  const onEdit = (id: string) => {
    const comment = commentData.find((comment) => comment.id === id);
    if (comment) dispatch(formSlice.actions.setForm(comment));
    dispatch(setMode("put"));
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
            <button type="button" onClick={() => onEdit(comment.id)}>
              수정
            </button>
            <button
              type="button"
              onClick={() => {
                onDelete(comment.id);
              }}
            >
              삭제
            </button>
          </Button>
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

import { MouseEvent, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store";
import { getComments } from "../store/comments.reducer";

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  margin-right: 3px;
`;

const PrevPage = styled(Page)``;
const LastPage = styled(Page)``;
const NumberPage = styled(Page)`
  ${({ active }: { active: boolean }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
`;

const COMMENT_PER_PAGE = 4;
function Pagination() {
  const totalCommentsCount = useAppSelector(
    (state) => state.commets.totalCount
  );
  const totalPage = Math.ceil(totalCommentsCount / COMMENT_PER_PAGE);
  const pageArray = [];
  for (let i = 1; i <= totalPage; i++) {
    pageArray.push(i);
  }
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  const onClickButton = (e: MouseEvent<HTMLButtonElement>) => {
    const pageNum = parseInt(e.currentTarget.value);
    setCurrentPage(pageNum);
    dispatch(getComments(pageNum));
  };

  const onClickPrevPage = () => {
    setCurrentPage(1);
    dispatch(getComments(1));
  };

  const onClickLastPage = () => {
    setCurrentPage(totalPage);
    dispatch(getComments(totalPage));
  };

  return (
    <PageListStyle>
      <PrevPage onClick={onClickPrevPage}>prev</PrevPage>
      {pageArray.map((page) => (
        <NumberPage
          active={page === currentPage ? true : false}
          key={`pagination-key-${page}`}
          onClick={onClickButton}
          value={page}
        >
          {page}
        </NumberPage>
      ))}

      <LastPage onClick={onClickLastPage}>last</LastPage>
    </PageListStyle>
  );
}

export default Pagination;

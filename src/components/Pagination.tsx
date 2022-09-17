import React, { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../store";

const COMMENT_PER_PAGE = 4;

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

function Pagination() {
  const totalCommentsCount = useAppSelector(
    (state) => state.commets.totalCount
  );
  const totalPage = Math.ceil(totalCommentsCount / COMMENT_PER_PAGE);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const onClickButton = (e: any) => {
    const pageNum = 1;
    setCurrentPage(pageNum);
  };
  const onClickPrevPage = () => {
    setCurrentPage(1);
  };
  const onClickLastPage = () => {
    setCurrentPage(totalPage);
  };
  return (
    <PageListStyle>
      <PrevPage onClick={onClickPrevPage}>prev</PrevPage>
      <NumberPage active={true} key="1">
        1
      </NumberPage>
      <LastPage onClick={onClickLastPage}>last</LastPage>
    </PageListStyle>
  );
}

export default Pagination;

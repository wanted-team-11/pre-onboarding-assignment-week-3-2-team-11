import { MouseEvent, useEffect, useState } from "react";
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
const PAGE_RANGE_CONST = 5;
const COMMENT_PER_PAGE = 4;
function Pagination() {
  const totalCommentsCount = useAppSelector(
    (state) => state.comments.totalCount
  );
  const dispatch = useAppDispatch();

  const totalPage = Math.ceil(totalCommentsCount / COMMENT_PER_PAGE);
  const pageArray = Array.from({ length: totalPage }, (v, i) => i + 1);
  const [fivePage, setFivePage] = useState([1, 2, 3, 4, 5]);

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const range = Math.ceil(currentPage / PAGE_RANGE_CONST);
    const newFivePage = pageArray.slice(
      (range - 1) * PAGE_RANGE_CONST,
      range * PAGE_RANGE_CONST
    );
    setFivePage(newFivePage);
  }, [currentPage, pageArray]);

  const onClickButton = (e: MouseEvent<HTMLButtonElement>) => {
    const pageNum = parseInt(e.currentTarget.value);
    setCurrentPage(pageNum);
    dispatch(getComments(pageNum));
  };

  const onClickFistPage = () => {
    setCurrentPage(1);
    dispatch(getComments(1));
  };

  const onClickLastPage = () => {
    setCurrentPage(totalPage);
    dispatch(getComments(totalPage));
  };

  const onClickPrevPage = () => {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    dispatch(getComments(prevPage));
  };
  const onClickNextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    dispatch(getComments(nextPage));
  };

  return (
    <PageListStyle>
      <PrevPage
        onClick={onClickFistPage}
        disabled={currentPage === 1 ? true : false}
      >
        first
      </PrevPage>
      <PrevPage
        onClick={onClickPrevPage}
        disabled={currentPage === 1 ? true : false}
      >
        prev
      </PrevPage>
      {fivePage.map((page) => (
        <NumberPage
          active={page === currentPage ? true : false}
          key={`pagination-key-${page}`}
          onClick={onClickButton}
          value={page}
        >
          {page}
        </NumberPage>
      ))}

      <LastPage
        onClick={onClickNextPage}
        disabled={currentPage === totalPage ? true : false}
      >
        next
      </LastPage>
      <LastPage
        onClick={onClickLastPage}
        disabled={currentPage === totalPage ? true : false}
      >
        last
      </LastPage>
    </PageListStyle>
  );
}

export default Pagination;

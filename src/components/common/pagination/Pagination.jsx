import React from "react";
import ArrowButton from "./ArrowButton";
import PageButton from "./PageButton";
import {
  BsChevronDoubleLeft,
  BsChevronLeft,
  BsChevronRight,
  BsChevronDoubleRight,
} from "react-icons/bs";
const Pagination = ({ page, setPage, totalPages }) => {
  const firstPage = () => setPage(1);
  const PrevPage = () => setPage(page - 1);
  const NextPage = () => setPage(page + 1);

  const lastPage = () => setPage(totalPages);
  const pagesArray = Array(totalPages)
    .fill()
    .map((_, index) => index + 1);
  return (
    <nav className="flex items-center">
      <ArrowButton
        onClick={firstPage}
        disabled={page === 1}
        icon={<BsChevronDoubleLeft />}
      />
      <ArrowButton
        onClick={PrevPage}
        disabled={page === 1}
        icon={<BsChevronLeft />}
      ></ArrowButton>
      {pagesArray.map((pg) => (
        <PageButton key={pg} page={pg} setPage={setPage} />
      ))}
      <ArrowButton
        onClick={NextPage}
        disabled={page === totalPages}
        icon={<BsChevronRight />}
      />
      <ArrowButton
        onClick={lastPage}
        disabled={page === totalPages}
        icon={<BsChevronDoubleRight />}
      />
    </nav>
  );
};

export default Pagination;

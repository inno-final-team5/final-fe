import React from "react";

const PageButton = ({ page, setPage }) => {
  return (
    <button
      className="py-2 px-1 text-mCream focus:text-mYellow active:text-mYellow text-sm md:text-lg"
      onClick={() => setPage(page)}
    >
      {page}
    </button>
  );
};

export default PageButton;

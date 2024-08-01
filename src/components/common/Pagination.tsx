import React, { useEffect, useState } from "react";

type PaginationProps = {
  pagesCount: number;
  currentPage: number;
  changeCurrentPage: (currentPage: number) => void;
};
const Pagination = ({
  pagesCount,
  currentPage,
  changeCurrentPage,
}: PaginationProps) => {
  const [currentPageArr, setCurrentPageArr] = useState<number[]>([]);

  const setPagesArr = (pages: number) => {
    let _pages: number[] = [];

    for (let i = 1; i < pages + 1; i++) {
      _pages.push(i);
    }

    setCurrentPageArr(_pages.slice(0, 5));
  };

  useEffect(() => {
    pagesCount && setPagesArr(pagesCount);
  }, [pagesCount]);

  return (
    <div className="basic-pagination d-flex justify-content-center">
      <ul>
        {currentPageArr.map((count: number) => (
          <li key={count + "story"} data-testid="pagination-item">
            <button onClick={() => changeCurrentPage(count)}>
              <span className={currentPage === count ? "current" : ""}>
                {count}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;

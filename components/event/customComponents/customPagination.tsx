import React, { FC } from "react";

interface Props {
  currentPage?: any;
  totalPages?: any;
  onPageChange?: any;
}

const Pagination: FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const visiblePages = 4; // Number of pages to show before dots
  const calculateVisiblePages = () => {
    if (totalPages <= visiblePages) {
      return pageNumbers;
    }
    const start = Math.max(currentPage - Math.floor(visiblePages / 2), 0);
    const end = Math.min(start + visiblePages, totalPages);
    return pageNumbers.slice(start, end);
  };
  const visiblePagesList = calculateVisiblePages();
  return (
    <nav className="flex justify-center my-4">
      <ul className="pagination flex gap-2">
        {visiblePagesList.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`flex border rounded-full h-7 w-7 items-center ${
              currentPage === pageNumber ? "bg-gray-300" : ""
            }`}
          >
            <div
              className="w-full text-center cursor-pointer"
              onClick={() => onPageChange(pageNumber)}
            >
              <span
                className={`pagination-btn text-[14px] ${
                  currentPage === pageNumber ? "active" : ""
                }`}
              >
                {pageNumber}
              </span>
            </div>
          </li>
        ))}

        {totalPages > visiblePages &&
          visiblePagesList[visiblePagesList.length - 1] < totalPages && (
            <li className="flex items-center">...</li>
          )}

        {currentPage < totalPages && (
          <li
            className={`flex border rounded-full h-7 w-7 items-center ${
              currentPage === totalPages ? "bg-gray-300" : ""
            }`}
          >
            <div
              className="w-full text-center cursor-pointer"
              onClick={() => onPageChange(totalPages)}
            >
              <span
                className={`pagination-btn text-[14px] ${
                  currentPage === totalPages ? "active" : ""
                }`}
              >
                {totalPages}
              </span>
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;

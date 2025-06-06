import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const getPageNumbers = () => {
    if (isFirstPage) {
      return [1, 2, 3].filter((n) => n <= totalPages);
    } else if (isLastPage) {
      return [totalPages - 2, totalPages - 1, totalPages].filter((n) => n >= 1);
    } else {
      return [currentPage - 1, currentPage, currentPage + 1].filter(
        (n) => n >= 1 && n <= totalPages
      );
    }
  };

  const pageNumbers = getPageNumbers();

  const handlePrevious = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      {!isFirstPage && (
        <button
          onClick={handlePrevious}
          className="px-4 py-2 bg-creamyWhite rounded hover:bg-primary  hover:text-white transition"
        >
          Previous
        </button>
      )}

      {pageNumbers.map((num, index) => {
        const isHighlighted =
          (isFirstPage && index === 0) ||
          (isLastPage && index === pageNumbers.length - 1) ||
          (!isFirstPage && !isLastPage && num === currentPage);

        return (
          <button
            key={num}
            onClick={() => onPageChange(num)}
            className={`w-10 h-10 rounded ${
              isHighlighted
                ? 'bg-primary text-white'
                : 'bg-creamyWhite text-black hover:bg-primary hover:text-white transition'
            } transition`}
          >
            {num}
          </button>
        );
      })}

      {!isLastPage && (
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-creamyWhite rounded hover:bg-primary  hover:text-white transition"
        >
          Next
        </button>
      )}
    </div>
  );
};

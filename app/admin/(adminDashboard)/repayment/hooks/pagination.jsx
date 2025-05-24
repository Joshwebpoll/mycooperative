// Pagination component with dots

export function Pagination({ currentPage, lastPage, onPageChange }) {
  const paginationRange = () => {
    const totalNumbers = 5;
    const totalBlocks = totalNumbers + 2;

    if (lastPage <= totalBlocks) {
      return Array.from({ length: lastPage }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - 1, 1);
    const rightSiblingIndex = Math.min(currentPage + 1, lastPage);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < lastPage - 1;

    const firstPageIndex = 1;
    const lastPageIndex = lastPage;

    const pages = [];

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3;
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);

      pages.push(...leftRange);
      pages.push("DOTS");
      pages.push(lastPageIndex);
    } else if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => lastPageIndex - rightItemCount + 1 + i
      );

      pages.push(firstPageIndex);
      pages.push("DOTS");
      pages.push(...rightRange);
    } else if (shouldShowLeftDots && shouldShowRightDots) {
      pages.push(firstPageIndex);
      pages.push("DOTS");
      pages.push(leftSiblingIndex);
      pages.push(currentPage);
      pages.push(rightSiblingIndex);
      pages.push("DOTS");
      pages.push(lastPageIndex);
    } else {
      pages.push(...Array.from({ length: lastPage }, (_, i) => i + 1));
    }

    return pages;
  };

  const pages = paginationRange();

  return (
    <div className="flex gap-2 justify-center ">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {pages.map((page, idx) =>
        page === "DOTS" ? (
          <span key={idx} className="px-2 py-1 select-none">
            &#8230;
          </span>
        ) : (
          <button
            key={idx}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 border rounded ${
              page === currentPage ? "bg-blue-600 text-white" : ""
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        disabled={currentPage === lastPage}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

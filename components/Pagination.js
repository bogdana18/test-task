export const PaginationBlock = ({
  currentPage,
  setCurrentPage,
  usersLength,
}) => {
  const pages = Math.ceil(usersLength.length / 20);
  return (
    <div className="pagination">
      {currentPage === 0 ? null : (
        <button
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
          className="button pagination__button"
        >
          <p>Prev</p>
        </button>
      )}

      <button className="button pagination__button">
        <p>{currentPage + 1}</p>
      </button>
        {currentPage + 1 === pages ? null : (
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
            className="button pagination__button"
          >
          <p>Next</p>
        </button>
      )}
    </div>
  );
};

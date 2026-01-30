const Pagination = ({ page, setPage, loading }) => {
    return (
      <div className="flex justify-center items-center gap-5 p-5">
        <button
          className="bg-amber-400 p-5 rounded cursor-pointer disabled:opacity-50"
          disabled={page === 1 || loading}
          onClick={() => setPage(prev => prev - 1)}
        >
          Prev
        </button>
  
        <span className="text-xl">Page {page}</span>
  
        <button
          className="bg-amber-400 p-5 rounded cursor-pointer disabled:opacity-50"
          disabled={loading}
          onClick={() => setPage(prev => prev + 1)}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  
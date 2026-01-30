import React, { useState, useEffect } from 'react';

const App = () => {
  const [userdata, setUserdata] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getdata = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );
      const data = await response.json();
      setUserdata(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getdata();
  }, [page]);

  return (
    <div>
      <div className="bg-black p-5 text-white min-h-screen">
        {loading ? (
          // 🔄 LOADING SPINNER
          <div className="flex justify-center items-center h-[70vh]">
            <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 px-5">
            {userdata.length === 0 ? (
              <p>Data not available</p>
            ) : (
              userdata.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-800 p-4 rounded-lg w-[300px]"
                >
                  <img
                    src={item.download_url}
                    alt={item.author}
                    className="h-40 w-full object-cover rounded mb-2"
                  />
                  <h3 className="font-bold">{item.author}</h3>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <div className="flex justify-center items-center gap-5 p-5">
        <button
          className="bg-amber-400 p-5 rounded cursor-pointer disabled:opacity-50"
          disabled={page === 1 || loading}
          onClick={() => setPage(prev => prev - 1)}
        >
          Prev
        </button>
        <span className="text-black-400 text-xl sticky">Page {page}</span>
        <button
          className="bg-amber-400 p-5 rounded cursor-pointer disabled:opacity-50"
          disabled={loading}
          onClick={() => setPage(prev => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;

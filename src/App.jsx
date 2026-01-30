import React, { useState, useEffect } from "react";
import ImageList from "./ImageList";
import Loader from "./Loader";
import Pagination from "./Pagination";

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
        {loading ? <Loader /> : <ImageList userdata={userdata} />}
      </div>

      <Pagination page={page} setPage={setPage} loading={loading} />
    </div>
  );
};

export default App;

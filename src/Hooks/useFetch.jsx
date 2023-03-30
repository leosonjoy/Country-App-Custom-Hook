import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw Error("Data fetching is not completed perfectly.");
      } else {
        const data = await res.json();
        setData(data);
        setIsLoading(false);
        setError(null);
      }
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);

  return { data, error, isLoading };
};

export default useFetch;

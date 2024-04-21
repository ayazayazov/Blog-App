import { useEffect, useState } from 'react';

export const useFetchData = ({ requestFn, dependecy = [] }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await requestFn();
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [...dependecy]);

  return { data, loading, error };
};

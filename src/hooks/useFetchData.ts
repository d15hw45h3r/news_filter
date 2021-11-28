import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = <T>(api: string, stateValue: any) => {
  const [data, setData] = useState<T>(stateValue);

  useEffect(() => {
    const fetchData = async () => {
      const fetch = await axios.get<T>(api);
      setData(fetch.data);
    };
    fetchData();
  }, [api]);

  return data;
};

export default useFetchData;

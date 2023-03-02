import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const useSlice = (slice) => {
  return useSelector((state) => state[slice]);
};

export const useData = (defaultState, fetcher, pollInterval) => {
  const [data, setData] = useState(defaultState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const refresh = async () => {
    if (!loading) {
      setLoading(true);
      try {
        setData(await fetcher());
        setError(null);
      } catch (error) {
        setData(defaultState);
        setError(error.message);
      }
      setLoading(false);
    }
  };
  useEffect(() => {
    refresh();
    if (pollInterval) {
      const handle = setInterval(() => refresh(), pollInterval);
      return clearInterval(handle);
    }
    return;
  }, []);
  return { loading, data, error, refresh };
};

export const useSheets = () => {
  const { loading, data, error, active, all } = useSlice("sheets");
  const dispatch = useDispatch();
  const selectActive = (newActiveSheet) =>
    dispatch.sheets.selectActiveSheet(newActiveSheet);
  const refresh = () => dispatch.sheets.refreshActiveSheet();
  return { loading, data, error, active, all, selectActive, refresh };
};

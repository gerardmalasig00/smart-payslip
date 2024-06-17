import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Models } from "react-native-appwrite";
import { AppwriteError } from "./appwrite";

interface UseFetchApiResult<T> {
  data: T | [];
  loading: boolean;
  refetch: () => Promise<void>;
}

const useAppwrite = <T>(fn: () => Promise<T>): UseFetchApiResult<T> => {
  const [data, setData] = useState<T | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fn();
      setData(res);
    } catch (err: any) {
      const message =
        err instanceof AppwriteError
          ? err.message
          : "An unexpected error occurred";
      Alert.alert("Error", message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();
  return { data, loading, refetch };
};

export default useAppwrite;

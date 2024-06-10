import { getCurrentUser } from "@/lib/appwrite";
import {
  useEffect,
  useState,
  createContext,
  useContext,
  PropsWithChildren,
} from "react";
import { Models } from "react-native-appwrite";

interface IGlobalProviderValue {
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
  user: any;
  setUser: (val: any) => void;
  isLoading: boolean;
}
const GlobalContext = createContext<IGlobalProviderValue | null>(null);

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch((err: any) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

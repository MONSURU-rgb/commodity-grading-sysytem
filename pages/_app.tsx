import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState, Dispatch, SetStateAction } from "react";
import "react-toastify/dist/ReactToastify.css";

export interface IContextType {
  authUser: IAuthUser | null;
  setAuthUser: Dispatch<SetStateAction<IAuthUser | null>>;
}
interface IAuthUser {
  first_name: string;
  is_active: boolean;
  last_name: string;
  email: string;
  user_picture: string;

  token: string;
}

export const AuthContext = createContext<IContextType | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [authUser, setAuthUser] = useState<IAuthUser | null>(null);
  let data = { authUser, setAuthUser };
  return (
    <AuthContext.Provider value={data}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

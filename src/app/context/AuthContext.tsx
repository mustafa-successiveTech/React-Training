"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextType = {
  isLogin: boolean;
  username: string;
  LoggedIn: (name : string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderType = {
  children: ReactNode;
};

export default function AuthProvider({ children } : AuthProviderType ) {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  const LoggedIn = (name: string) => {
    setIsLogin(true);
    setUsername(name);
  };

  return (
    <AuthContext.Provider value={{ isLogin, username, LoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

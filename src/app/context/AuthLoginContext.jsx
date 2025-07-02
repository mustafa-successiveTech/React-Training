"use client"
import { createContext, useContext, useState } from 'react';

const AuthLoginContext = createContext();

export default function AuthLoginProvider({children}) {
    const [username, setUsername] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const login = (user, pass) => {
        if(user === "admin" && pass === "12345"){
            setUsername(user);
            setIsLogin(true);
            return true;
        }
        return false;
    }

    const logout = () => {
        setIsLogin(false);
        setUsername(null);
        Router.push('login');
    }

    return (
        <>
            <AuthLoginContext.Provider value={{username, isLogin, login, logout}}>
                {children}
            </AuthLoginContext.Provider>
        </>
    )
};

export const useLoginAuth = () => {
  const context = useContext(AuthLoginContext);
  console.log("useLoginAuth context:", context);
  return context;
}

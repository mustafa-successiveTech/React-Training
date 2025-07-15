"use client"
import { createContext, useContext, useState } from 'react';
import { useRouter }  from 'next/navigation';

type AuthLoginType = {
    username : string | null;
    isLogin : boolean;
    login : (user : string, pass : string) => boolean;
    logout : () => void;
};

const AuthLoginContext = createContext<AuthLoginType | null>(null);

export default function AuthLoginProvider({children} : {children : React.ReactNode}){
    const [username, setUsername] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const router = useRouter();

    const login = (user : string, pass : string): boolean => {
        if(user === "admin" && pass === "12345"){
            setUsername(user);
            setIsLogin(true);
            return true;
        }
        return false;
    }

    const logout = () : void => {
        setIsLogin(false);
        setUsername(null);
        router.push('login');
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

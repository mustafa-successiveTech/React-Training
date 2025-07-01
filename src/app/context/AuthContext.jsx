"use client"
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState("");

    const LoggedIn = (name) => {
        setIsLogin(true);
        setUsername(name);
    };

    return(
        <AuthContext.Provider value={{isLogin, username, LoggedIn}} >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
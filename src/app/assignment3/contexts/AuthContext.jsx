const { createContext, useState, useContext } = require("react");

const authContext = createContext();

export const authProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const login = () => {
      setIsLoggedIn(true);
  }

  const logout = () => {
      setIsLoggedIn(false);
  }

  return (
      <authContext.Provider value={{ isLoggedIn, login, logout}}>
          {children}
      </authContext.Provider>
  )
};

export const useAuth = useContext(authContext);
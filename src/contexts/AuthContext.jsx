import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ usuario, setUsuario, isLogged, setIsLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

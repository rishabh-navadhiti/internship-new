import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const expiry = localStorage.getItem("loginExpire");
      if (!expiry || Date.now() > parseInt(expiry, 10)) {
        logout();
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuth();

    const interval = setInterval(checkAuth, 1000);
    return () => clearInterval(interval);
  }, []);

  const login = () => {
    localStorage.setItem("loginExpire", Date.now() + 60 * 1000);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("loginExpire");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
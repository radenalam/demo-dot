import React, { createContext, useContext } from "react";
import { useCookies } from "react-cookie";

interface AuthContextType {
  isAuthenticated: boolean;
  logout: () => void;
}

const defaultAuthContext: AuthContextType = {
  isAuthenticated: false,
  logout: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookie, , removeCookies] = useCookies();

  const logout = async () => {
    removeCookies("access_token");
    removeCookies("full_name");
    removeCookies("access_token_expiration");
  };

  const isAuthenticated = !!cookie.access_token;

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

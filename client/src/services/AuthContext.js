import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Call login API endpoint
    // Set user state if login successful
  };

  const register = (userData) => {
    // Call register API endpoint
    // Set user state if registration successful
  };

  const logout = () => {
    // Clear user state
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

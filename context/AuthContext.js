import React, { createContext, useState } from 'react';

const AuthContext = createContext({ token: null, setToken: () => {} });

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
import React, { createContext, useState } from 'react';

const AuthContext = createContext({ token: null,temporaryToken: null,setTemporaryToken:()=>{}, setToken: () => {} });

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const[temporaryToken, setTemporaryToken] = useState(null)

  return (
    <AuthContext.Provider value={{ token, setToken, temporaryToken, setTemporaryToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
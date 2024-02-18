import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialTokenValue = localStorage.getItem("token");
  const [token, setToken] = useState(initialTokenValue);

  const userLoggedIn = !!token;

  const logInHndler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextVlaue = {
    token: token,
    isLoggedIn: userLoggedIn,
    login: logInHndler,
    logout: logOutHandler,
  };

  return (
    <AuthContext.Provider value={contextVlaue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

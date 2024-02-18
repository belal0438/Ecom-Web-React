import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import App from "./App";
import FooterPage from "./components/Footers/footerPage";
import ContextProvider from "./components/ContextApi/contextProvider";

const Layout = () => {
  const [showCart, setShowCart] = useState(false);

  const cartModelShow = () => {
    setShowCart(true);
  };

  const closeCartModel = () => {
    setShowCart(false);
  };

  return (
    <>
      <ContextProvider>
        <App
          showCart={showCart}
          cartModelShow={cartModelShow}
          closeCartModel={closeCartModel}
        />
        <Outlet />
        <FooterPage />
      </ContextProvider>
    </>
  );
};

export default Layout;

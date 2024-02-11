import React from "react";
import { Outlet } from "react-router-dom";
import App from "./App";
import FooterPage from "./components/Footers/footerPage";

const Layout = () => {
  return (
    <>
      <App />
      <Outlet />
      <FooterPage />
    </>
  );
};

export default Layout;

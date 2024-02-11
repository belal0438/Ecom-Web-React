// import React from "react";
// import { Outlet } from "react-router-dom";
// import App from "./App";
// import FooterPage from "./components/Footers/footerPage";

// const Layout = () => {
//   return (
//     <>
//       <App />
//       <Outlet />
//       <FooterPage />
//     </>
//   );
// };

// export default Layout;

// Layout.js
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import App from "./App";
import FooterPage from "./components/Footers/footerPage";

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
      <App
        showCart={showCart}
        cartModelShow={cartModelShow}
        closeCartModel={closeCartModel}
      />
      <Outlet />
      <FooterPage />
    </>
  );
};

export default Layout;

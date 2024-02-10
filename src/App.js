import React, { useState } from "react";
import NavBar from "./components/NavBar/navBar";
import StorePage from "./components/Store/storePage";
import FooterPage from "./components/Footers/footerPage";
import CartModel from "./components/CartModels/cartModel";
import ContextProvider from "./components/ContextApi/contextProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const CartModelShow = () => {
    setShowCart(true);
  };

  const closeCartModel = () => {
    setShowCart(false);
  };

  return (
    <ContextProvider>
      <NavBar showCartModel={CartModelShow} />
      <StorePage />
      {showCart && <CartModel CloseCartModel={closeCartModel} />}
      <FooterPage />
    </ContextProvider>
  );
}

export default App;

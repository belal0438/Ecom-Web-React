import React, { useState } from "react";
import NavBar from "./components/NavBar/navBar";
import StorePage from "./components/Store/storePage";
import FooterPage from "./components/Footers/footerPage";
import CartModel from "./components/CartModels/cartModel";

function App() {
  const [showCart, setShowCart] = useState(false);

  const CartModelShow = () => {
    setShowCart(true);
  };

  const closeCartModel = () => {
    setShowCart(false);
  };

  return (
    <>
      <NavBar showCartModel={CartModelShow} />
      <StorePage />
      {showCart && <CartModel CloseCartModel={closeCartModel} />}
      <FooterPage />
    </>
  );
}

export default App;

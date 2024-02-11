import React, { useState } from "react";
import NavBar from "./components/NavBar/navBar";
import CartModel from "./components/CartModels/cartModel";
import ContextProvider from "./components/ContextApi/contextProvider";
import GenericsHeading from "./components/Store/Generics/genericsHeading";

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
      <GenericsHeading />
      {showCart && <CartModel CloseCartModel={closeCartModel} />}
    </ContextProvider>
  );
}

export default App;

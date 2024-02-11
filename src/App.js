import React from "react";
import NavBar from "./components/NavBar/navBar";
import CartModel from "./components/CartModels/cartModel";
import GenericsHeading from "./components/Store/Generics/genericsHeading";

function App({ showCart, cartModelShow, closeCartModel }) {
  return (
    <>
      <NavBar showCartModel={cartModelShow} />
      <GenericsHeading />
      {showCart && <CartModel CloseCartModel={closeCartModel} />}
    </>
  );
}

export default App;

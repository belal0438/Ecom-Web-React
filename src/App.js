import React, { useState } from "react";
import NavBar from "./components/NavBar/navBar";
import CartModel from "./components/CartModels/cartModel";
import ContextProvider from "./components/ContextApi/contextProvider";
import GenericsHeading from "./components/Store/Generics/genericsHeading";
import StoreGridCard from "./components/Store/StorePart/gridCard";

function App({ showCart, cartModelShow, closeCartModel }) {
  return (
    <ContextProvider>
      <NavBar showCartModel={cartModelShow} />
      <GenericsHeading />
      {showCart && <CartModel CloseCartModel={closeCartModel} />}
    </ContextProvider>
  );
}

export default App;

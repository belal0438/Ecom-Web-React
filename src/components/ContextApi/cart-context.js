import React from "react";

const CartContext = React.createContext({
  items: [],
  Total: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;

import React, { useState } from "react";
import CartContext from "./cart-context";

const ContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const AddItemHandler = (item) => {
    const CheckInExistItem = items.find(
      (existItem) => existItem.id === item.id
    );
    if (CheckInExistItem) {
      alert("This item is already added to the cart");
    } else {
      setItems((prevItems) => [...prevItems, item]);
    }
  };

  const RemoveIItemHandler = (id) => {
    const CheckInExistItem = items.find((existItem) => existItem.id === id);
    if (CheckInExistItem) {
      setItems((prevItems) => {
        return prevItems.filter((item) => item.id !== id);
      });
    }
  };

  const total = items.reduce((curEle, Ele) => {
    return curEle + Number(Ele.price);
  }, 0);

  const contextValue = {
    items: items,
    Total: total,
    addItem: AddItemHandler,
    removeItem: RemoveIItemHandler,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {/* {console.log("items", items)} */}
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;

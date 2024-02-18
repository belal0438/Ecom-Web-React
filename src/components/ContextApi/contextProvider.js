import React, { useEffect, useState } from "react";
import CartContext from "./cart-context";
import axios from "axios";

const PostItem = async (item) => {
  try {
    const emailId = localStorage.getItem("email");
    console.log(emailId);
    const CrudCrudUrl = `https://crudcrud.com/api/de39c9e624f04ca880194a72d2e83d9c/cart${emailId}`;

    const result = await axios.post(CrudCrudUrl, { item });
    console.log(result);
  } catch (error) {
    console.log("ErrorIn ModelCart", error);
    alert(error.message);
  }
};

const ContextProvider = (props) => {
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   async function fechData() {
  //     const CrudCrudUrl = `https://crudcrud.com/api/de39c9e624f04ca880194a72d2e83d9c/cartbelalgmailcom`;

  //     const Getresult = await axios.get(CrudCrudUrl);
  //     const ItemData = Getresult.data.map((data) => data.item);
  //     // console.log("Getresult", ItemData);
  //     setItems((prevItems) => [...prevItems, ItemData]);
  //   }
  //   fechData();
  // }, []);

  const AddItemHandler = async (item) => {
    const CheckInExistItem = items.find(
      (existItem) => existItem.id === item.id
    );
    if (CheckInExistItem) {
      alert("This item is already added to the cart");
    } else {
      setItems((prevItems) => [...prevItems, item]);
      await PostItem(item);
    }
  };

  const RemoveIItemHandler = (id) => {
    console.log("id", id);
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

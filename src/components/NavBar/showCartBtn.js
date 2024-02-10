import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import CartContext from "../ContextApi/cart-context";

const ShowCartBtn = (props) => {
  const cntxt = useContext(CartContext);
  let totalQauntity = cntxt.items.length;
  if (totalQauntity < 1) {
    totalQauntity = 0;
  }
  return (
    <div onClick={props.showCartModel}>
      <Button variant="outline-info" className="border-3 rounded-3">
        cart
      </Button>
      <span className="m-2 align-top fs-3 text-info">{totalQauntity}</span>
    </div>
  );
};

export default ShowCartBtn;

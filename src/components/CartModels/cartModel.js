import React, { useContext } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import TableValue from "./tableValue";
import OverLay from "./overLay";
import CartContext from "../ContextApi/cart-context";

const CartModel = (props) => {
  const cntxt = useContext(CartContext);
  return (
    <OverLay>
      <Card style={{ width: "30rem" }}>
        <div className="d-flex justify-content-end mt-3 me-3">
          <CloseButton aria-label="Hide" onClick={props.CloseCartModel} />
        </div>
        <Card.Body className="text-center">
          <Card.Title
            style={{
              fontFamily: "Courier, monospace",
              fontWeight: "bold",
            }}>
            CART
          </Card.Title>
          <TableValue />
          <div
            style={{
              fontFamily: "Courier, monospace",
              fontWeight: "bold",
            }}
            className="d-flex justify-content-end gap-4">
            <h3>Total</h3>
            <span style={{ fontSize: "20px", marginRight: "6px" }}>
              ${cntxt.Total}
            </span>
          </div>
          <Button variant="info">PURCHASE</Button>
        </Card.Body>
      </Card>
    </OverLay>
  );
};

export default CartModel;

import React, { useContext, useRef } from "react";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./cartModel.css";
import CartContext from "../ContextApi/cart-context";

const TableValue = () => {
  const Cntxt = useContext(CartContext);
  const Quantity = useRef(1);

  const OnclickRemoveHandler = (id) => {
    Cntxt.removeItem(id);
  };

  const TrData = Cntxt.items.map((ele) => (
    <tr key={ele.id}>
      <td className="d-flex">
        <Image
          style={{ width: "70px", height: "70px" }}
          src={ele.imageUrl}
          rounded
        />
        <Container className="d-grid">
          <span>{ele.title}</span>
          <span className="m-1">{Quantity >= 1 ? Quantity : 1}</span>
        </Container>
      </td>
      <td>{ele.price}</td>
      <td className="d-flex justify-content-center ">
        <input
          ref={Quantity}
          style={{ width: "40px", marginRight: "3px", textAlign: "center" }}
          defaultValue={1}
          min={1}
          max={5}
          type="text"
        />
        <Button
          onClick={() => OnclickRemoveHandler(ele.id)}
          variant="danger"
          style={{
            width: "50px",
            height: "30px",
            textAlign: "center",
            fontSize: "7px",
          }}>
          remove
        </Button>{" "}
      </td>
    </tr>
  ));

  return (
    <Table responsive>
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
      <tbody>{TrData}</tbody>
    </Table>
  );
};

export default TableValue;

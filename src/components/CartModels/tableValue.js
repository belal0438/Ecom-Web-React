import React from "react";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
// import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./cartModel.css";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const TrData = cartElements.map((ele, index) => (
  <tr>
    <td className="d-flex">
      <Image
        style={{ width: "70px", height: "70px" }}
        src={ele.imageUrl}
        rounded
      />
      <Container className="d-grid">
        <span>{ele.title}</span>
        <span className="m-1">{ele.quantity}</span>
      </Container>
    </td>
    <td>{ele.price}</td>
    <td className="d-flex justify-content-center ">
      <input
        style={{ width: "40px", marginRight: "3px", textAlign: "center" }}
        defaultValue={1}
        type="text"
      />
      <Button
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

const TableValue = () => {
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

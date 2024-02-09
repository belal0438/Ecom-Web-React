import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CardContainer from "./Card";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const columDataForCard = productsArr.map((product, index) => (
  <Col key={index} md={5} className="mb-5 d-flex justify-content-center">
    <CardContainer
      title={product.title}
      price={product.price}
      imageUrl={product.imageUrl}
    />
  </Col>
));

const GridCard = () => {
  return (
    <Container
      className="text-center mt-5"
      style={{ fontFamily: "Times New Roman" }}>
      <h1>Title</h1>
      <Row className="justify-content-center align-items-center mb-4">
        {columDataForCard}
      </Row>
      <Button variant="secondary" className="mb-5">
        See the cart
      </Button>{" "}
    </Container>
  );
};

export default GridCard;

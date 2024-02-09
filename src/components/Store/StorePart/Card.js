import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./CustomeCssforScaleUp.css";

const CardContainer = ({ title, price, imageUrl }) => {
  return (
    <Card
      style={{ width: "18rem", overflow: "hidden", border: "0" }}
      className="scale-container">
      <Card.Title>{title}</Card.Title>
      <div className="image-container">
        <Card.Img
          variant="top"
          src={imageUrl}
          className="card-image rounded-0"
        />
      </div>
      <Card.Body className="mt-3 d-flex justify-content-between">
        <Card.Text style={{ fontSize: "1.4rem", letterSpacing: "0.1px" }}>
          ${price}
        </Card.Text>
        <Button variant="info">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default CardContainer;

import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartContext from "../../ContextApi/cart-context";
import "./CustomeCssforScaleUp.css";
import { NavLink } from "react-router-dom";

const CardContainer = (props) => {
  const { title, price, imageUrl } = props;
  const cartCxt = useContext(CartContext);
  const AddToCartOnclickHanldler = (eve) => {
    eve.preventDefault();
    cartCxt.addItem(props);
  };

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

      <Card.Body className="mt-3 d-flex justify-content-between p-2">
        <Card.Text>${price}</Card.Text>

        <NavLink
          to={`Product/${props.id}`}
          className={({ isActive }) =>
            `${isActive ? "text-light p-1" : "text-decoration-none p-1"}`
          }>
          <Button
            variant="info"
            className="ms-3 me-3"
            style={{
              fontSize: "12px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}>
            View Details
          </Button>
        </NavLink>

        <Button
          variant="info"
          style={{ fontSize: "12px" }}
          onClick={AddToCartOnclickHanldler}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardContainer;

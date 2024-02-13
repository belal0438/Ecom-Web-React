import React, { useContext } from "react";
import CartContext from "../ContextApi/cart-context";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const ProductDetails = (props) => {
  const contxt = useContext(CartContext);
  const { id, imageUrl, price, title } = props.productDetails[0];

  const OrderOnlcikHanlder = (id) => {
    alert(`Product ${title} Orederd`);
  };

  const AddToCartOnclickHanldler = (eve) => {
    eve.preventDefault();
    contxt.addItem({ id, imageUrl, price, title });
  };

  return (
    <div className="text-center">
      <h3 className="mt-4 mb-4">Product Details</h3>
      <div
        className="d-flex text-center justify-content-between m-auto "
        style={{ width: "65rem" }}>
        <div>
          <Card className="mb-4" style={{ width: "22rem" }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Title className="mt-2">{title}</Card.Title>
            <Card.Body>
              <div className="d-flex text-center justify-content-between m-auto ms-4 me-4">
                <Button variant="info" onClick={OrderOnlcikHanlder}>
                  Order Now
                </Button>
                <Button variant="info" onClick={AddToCartOnclickHanldler}>
                  Add to Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="ms-4">
          <div className="modal-header text-center ">
            <h5 className="modal-title">Ratings & Reviews</h5>
            <p className="d-flex text-center ms-5 me-5">
              <div className="bg-success p-2 rounded-circle">
                4<span className="text-warning">&#9733;</span>
              </div>
              16,235 ratings and 1,540 reviews
            </p>
            <button type="button" className="btn btn-info">
              Rate Product
            </button>
          </div>
          <div className="modal-header">
            <div className="d-flex">
              <h5>${price}</h5>
              <del className="ms-2 me-2">₹1,499</del>
              <p className="text-success">80% off</p>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div className="text-brown fs-5">Colores</div>
            <Container style={{ width: "15rem" }}>
              <Row>
                <Col xs={6} md={4} className="mb-2">
                  <Image src={imageUrl} rounded style={{ width: "60px" }} />
                </Col>
                <Col xs={6} md={4} className="mb-2">
                  <Image src={imageUrl} rounded style={{ width: "60px" }} />
                </Col>
                <Col xs={6} md={4} className="mb-2">
                  <Image src={imageUrl} rounded style={{ width: "60px" }} />
                </Col>
              </Row>
            </Container>
          </div>

          <div className="d-flex justify-content-between mt-4">
            <div className="text-brown fs-5">Size</div>
            <Container style={{ width: "15rem" }}>
              <Row>
                <Col xs={6} md={4} className="mb-2">
                  <h2 style={{ width: "60px", border: " 2px solid gray" }}>
                    M
                  </h2>
                </Col>
                <Col xs={6} md={4} className="mb-2">
                  <h2 style={{ width: "60px", border: " 2px solid gray" }}>
                    L
                  </h2>
                </Col>
                <Col xs={6} md={4} className="mb-2">
                  <h2 style={{ width: "60px", border: " 2px solid gray" }}>
                    XL
                  </h2>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="mt-4">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              sint, deserunt, distinctio amet similique, vero quos error a at
              aliquid nam fuga cum fugiat velit nobis ipsa odit possimus
              recusandae.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

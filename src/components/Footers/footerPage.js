import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
/*
Logo Configure
*/

import youTublogo from "../../../src/assets/youtub.png";
import amazonLogo from "../../../src/assets/amazon-icon-21102.png";
import flipKartLogo from "../../../src/assets/flipkart-logo.png";

const FooterPage = () => {
  return (
    <div className="bg-info d-flex justify-content-between p-4">
      <h1
        style={{ fontFamily: "Times New Roman" }}
        className="fs-20 fw-bold text-light  m-3">
        The Generics
      </h1>
      <div className="bg-info d-flex justify-content-between">
        <Container className="text-start m-3">
          <Row className="justify-content-end">
            <Col>
              <Button
                variant="outline-primary"
                href="your-youtube-link"
                target="_blank">
                <Image
                  className="img-fluid rounded"
                  src={youTublogo}
                  alt="YouTube"
                  style={{ width: "2rem", height: "2rem" }}
                />
              </Button>{" "}
            </Col>
            <Col>
              <Button
                variant="outline-primary"
                href="your-amazon-link"
                target="_blank">
                <Image
                  className="img-fluid rounded"
                  src={amazonLogo}
                  alt="Amazon"
                  style={{ width: "2rem", height: "2rem" }}
                />
              </Button>{" "}
            </Col>
            <Col>
              <Button
                variant="outline-primary"
                href="your-flipkart-link"
                target="_blank">
                <Image
                  className="img-fluid rounded"
                  src={flipKartLogo}
                  alt="Flipkart"
                  style={{ width: "2rem", height: "2rem" }}
                />
              </Button>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FooterPage;

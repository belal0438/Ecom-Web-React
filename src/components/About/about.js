import React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ImageUrl from "../../assets/mohd_belal.jpeg";

const About = () => {
  return (
    <Card
      style={{
        border: "none",
        fontFamily: "Times New Roman",
        letterSpacing: "0.7px",
      }}
      className="align-items-center  pt-3 ms-5 me-5 ">
      <Card.Header as="h5" className="color-dark">
        About
      </Card.Header>
      <Card.Body className="d-flex flex-row align-items-center">
        <Image
          src={ImageUrl}
          roundedCircle
          style={{ width: "250px", height: "250px", marginBottom: "10px" }}
        />
        <Card.Text className="ms-4">
          Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
          sorrows, hates no prosecutors will unfold in the enduring of which
          were born in it? Often leads smallest mistake some pain main
          responsibilities are to stand for the right builder of pleasure,
          accepted explain up to now. , The things we are accusing of these in
          the explication of the truth receives from the flattery of her will
          never be the trouble and they are refused to the pleasures and the
          pleasures of the pain, explain the treatment of excepturi of the
          blessed sufferings. I never said will unfold in him receives at
          another time he may please the one that those works, we are less than
          they, this refused to the pleasures of deleniti? Those are! Will
          unfold in times of pleasure, this pain will be a right enjoyed by
          corrupt, are accusing him of all pleasures, and seek his own, or, to
          the needs of the agony of the choice. We hate the fellow. Lorem ipsum
          dolor, sit amet consectetur rebates. The distinction, that arise from
          or to. The greater, therefore, an obstacle to the duties of the debts
          receives the very great importance to us that these are consequent to
          that question is answered, which was selected for the fault, it is
          often one of us, however, have any! Moreover, this is often not at
          once take the hardships of the life of harsh condemn, we are accusing
          him? Him whom something large cisterns.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default About;

import React from "react";
import Button from "react-bootstrap/Button";

const ShowCartBtn = (props) => {
  return (
    <div onClick={props.showCartModel}>
      <Button variant="outline-info" className="border-3 rounded-3">
        cart
      </Button>
      <span className="m-2 align-top fs-3 text-info">8</span>
    </div>
  );
};

export default ShowCartBtn;

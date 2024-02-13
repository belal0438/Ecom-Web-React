import React from "react";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

const postContactUserForm = (props) => {
  return (
    <>
      <Alert className="text-center mt-2" variant={props.variant}>
        {props.message}
        <Link to="/" className="ms-2 me-2">
          Home link
        </Link>
        . Give it a click go home page.
      </Alert>
    </>
  );
};

export default postContactUserForm;

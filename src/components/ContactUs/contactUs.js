import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ContactUs = (props) => {
  const name = useRef("");
  const email = useRef("");
  const phoneNum = useRef("");
  const message = useRef("");

  const OnsubmitFormHandler = (eve) => {
    eve.preventDefault();
    const obj = {
      name: name.current.value,
      email: email.current.value,
      phoneNum: phoneNum.current.value,
      message: message.current.value,
    };

    // console.log("Formobj>>", obj);
    props.GetDataFromForm(obj);

    name.current.value = "";
    email.current.value = "";
    phoneNum.current.value = "";
    message.current.value = "";
  };

  return (
    <Form className="m-5" onSubmit={OnsubmitFormHandler}>
      <Form.Group className="mb-3" controlId="name.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="name" ref={name} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" ref={email} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="enter your phone number"
          ref={phoneNum}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          rows={3}
          placeholder=" messages"
          ref={message}
        />
      </Form.Group>
      <Button
        variant="outline-info"
        className="align-item-center"
        type="submit">
        submit
      </Button>{" "}
    </Form>
  );
};

export default ContactUs;

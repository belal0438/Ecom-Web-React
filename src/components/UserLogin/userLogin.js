import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";
import AuthContext from "../../AuthContextAPi/Auth-context";

const HandlingSubmittedData = async (data) => {
  try {
    const firebaseUrl =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNlF_y4BvLjBCV6jJWf9CmAX7AZ7Hhzgg";

    const result = await axios.post(firebaseUrl, {
      ...data,
      returnSecureToken: true,
    });
    // console.log("result", result);
    return result;
  } catch (error) {
    // console.log("ErrorSignUp",error);
    alert(error.message);
  }
};

const UserLogin = () => {
  const AuthCtxt = useContext(AuthContext);
  const navigate = useNavigate();
  const inpuEmailtRef = useRef();
  const inputPasswordRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const formSubmitHanlder = async (eve) => {
    eve.preventDefault();

    let obj = {
      email: inpuEmailtRef.current.value,
      password: inputPasswordRef.current.value,
    };
    // console.log(obj);
    if (obj.password.length <= 5) {
      alert("password length should greater then 5");
      return;
    }
    try {
      setIsLoading(true);
      const result = await HandlingSubmittedData(obj);

      if (result.status >= 200 && result.status < 300) {
        setIsLoading(false);
        const resultData = await result.data;
        AuthCtxt.login(resultData.idToken);
        navigate("/");
        localStorage.setItem("email", resultData.email);
        return resultData;
      } else {
        setIsLoading(false);
        throw new Error("Authencation failed!");
      }
    } catch (error) {
      // console.error("Error during form submission", error);
      setIsLoading(false);
      alert(error.message);
      return;
    }
  };

  return (
    <div className="text-center mb-4">
      <h2 className="mt-5 mb-4">Login</h2>
      <Form
        style={{ width: "30rem", margin: "auto", height: "30vh" }}
        onSubmit={formSubmitHanlder}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              ref={inpuEmailtRef}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Password"
              ref={inputPasswordRef}
            />
          </Col>
        </Form.Group>
        {isLoading && <p> Sending request...</p>}
        <Button variant="info" type="submit">
          Submit
        </Button>{" "}
      </Form>
    </div>
  );
};

export default UserLogin;

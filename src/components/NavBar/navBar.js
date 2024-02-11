import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ShowCartBtn from "./showCartBtn";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar = (props) => {
  const [cartBtn, setCartBtn] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check the pathname to determine whether to show the cart button
    if (location.pathname === "/Home" || location.pathname === "/About") {
      setCartBtn(false);
    } else {
      setCartBtn(true);
    }
  }, [location.pathname]);

  return (
    <Navbar expand="sm" className="bg-dark fixed-top">
      <Container>
        <Link to="/" className="text-light text-decoration-none">
          <h3>Ecom-Web</h3>
        </Link>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-center">
          <Nav>
            <NavLink
              to="/Home"
              className={({ isActive }) =>
                `${isActive ? "text-light" : "text-light text-decoration-none"}`
              }>
              HOME
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-light me-4 ms-4"
                    : "text-light text-decoration-none me-4 ms-4"
                }`
              }>
              STORE
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `${isActive ? "text-light" : "text-light text-decoration-none"}`
              }>
              ABOUT
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        {cartBtn && <ShowCartBtn showCartModel={props.showCartModel} />}
      </Container>
    </Navbar>
  );
};

export default NavBar;

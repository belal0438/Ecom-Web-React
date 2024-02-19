import React, { useState, useEffect, useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import ShowCartBtn from "./showCartBtn";
import { Link, NavLink, useLocation } from "react-router-dom";
import AuthContext from "../../AuthContextAPi/Auth-context";

const NavBar = (props) => {
  const [cartBtn, setCartBtn] = useState(true);
  const location = useLocation();
  const AuthCtxt = useContext(AuthContext);
  const isLoggedIn = AuthCtxt.isLoggedIn;

  useEffect(() => {
    // Check the pathname to determine whether to show the cart button
    if (
      location.pathname === "/Home" ||
      location.pathname === "/About" ||
      location.pathname === "/Contact" ||
      location.pathname === "/Login"
    ) {
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
            {isLoggedIn && (
              <NavLink
                to="/Home"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-light" : "text-light text-decoration-none"
                  }`
                }>
                HOME
              </NavLink>
            )}

            {isLoggedIn && (
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
            )}

            <NavLink
              to="/About"
              className={({ isActive }) =>
                `${isActive ? "text-light" : "text-light text-decoration-none"}`
              }>
              ABOUT
            </NavLink>

            {!isLoggedIn && (
              <NavLink
                to="/Login"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-light me-4 ms-4"
                      : "text-light me-4 ms-4 text-decoration-none"
                  }`
                }>
                LOGIN
              </NavLink>
            )}

            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-light me-4 ms-4"
                    : "text-light me-4 ms-4 text-decoration-none"
                }`
              }>
              CONTACT
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        {cartBtn && <ShowCartBtn showCartModel={props.showCartModel} />}
      </Container>
    </Navbar>
  );
};

export default NavBar;

import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.js";
import StorePage from "./components/Store/StorePart/gridCard";
import About from "./components/About/about";
import Home from "./components/Home/home.js";
import ContactUsFetch from "./components/ContactUs/contactUsFetch.js";
import ProductDetailValue from "./components/ProductDetails/productDetailValue.js";
import UserLogin from "./components/UserLogin/userLogin.js";
import AuthContext from "./AuthContextAPi/Auth-context.js";
import { AuthContextProvider } from "./AuthContextAPi/Auth-context.js";

// import { redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";

/*
React Bootsrap configuration
*/

import "../node_modules/react-bootstrap/dist/react-bootstrap.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

/*
configure Routes
*/

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const RouteComponent = () => {
  const AuthCtxt = useContext(AuthContext);
  // console.log("AuthCtxt", AuthCtxt);
  const routes = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path=""
        element={AuthCtxt.isLoggedIn ? <StorePage /> : <Navigate to="/Login" />}
      />
      <Route
        path="Home"
        element={AuthCtxt.isLoggedIn ? <Home /> : <Navigate to="/Login" />}
      />
      <Route
        path="Product/:ProductId"
        element={
          AuthCtxt.isLoggedIn ? (
            <ProductDetailValue />
          ) : (
            <Navigate to="/Login" />
          )
        }
      />
      <Route
        path="Login"
        element={!AuthCtxt.isLoggedIn ? <UserLogin /> : <Navigate to="/" />}
      />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<ContactUsFetch />} />
    </Route>
  );

  const router = createBrowserRouter(routes);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <RouteComponent />
  </AuthContextProvider>
);

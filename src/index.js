import React, { Suspense, lazy, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.js";
// import StorePage from "./components/Store/StorePart/gridCard";
// import About from "./components/About/about";
// import Home from "./components/Home/home.js";
// import ContactUsFetch from "./components/ContactUs/contactUsFetch.js";
// import ProductDetailValue from "./components/ProductDetails/productDetailValue.js";
// import UserLogin from "./components/UserLogin/userLogin.js";
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

const StorePage = lazy(() => import("./components/Store/StorePart/gridCard"));
const Home = lazy(() => import("./components/Home/home.js"));
const ContactUsFetch = lazy(() =>
  import("./components/ContactUs/contactUsFetch.js")
);
const About = lazy(() => import("./components/About/about"));
const UserLogin = lazy(() => import("./components/UserLogin/userLogin.js"));

const ProductDetailValue = lazy(() =>
  import("./components/ProductDetails/productDetailValue.js")
);

const RouteComponent = () => {
  const AuthCtxt = useContext(AuthContext);
  // console.log("AuthCtxt", AuthCtxt);
  const routes = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path=""
        element={
          AuthCtxt.isLoggedIn ? (
            <Suspense fallback={<p>Loading...</p>}>
              <StorePage />
            </Suspense>
          ) : (
            <Navigate to="/Login" />
          )
        }
      />
      <Route
        path="Home"
        element={
          AuthCtxt.isLoggedIn ? (
            <Suspense fallback={<p>Loading...</p>}>
              <Home />{" "}
            </Suspense>
          ) : (
            <Navigate to="/Login" />
          )
        }
      />
      <Route
        path="Product/:ProductId"
        element={
          AuthCtxt.isLoggedIn ? (
            <Suspense fallback={<p>Loading...</p>}>
              <ProductDetailValue />
            </Suspense>
          ) : (
            <Navigate to="/Login" />
          )
        }
      />
      <Route
        path="Login"
        element={
          !AuthCtxt.isLoggedIn ? (
            <Suspense fallback={<p>Loading...</p>}>
              {" "}
              <UserLogin />
            </Suspense>
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="About"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="Contact"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <ContactUsFetch />
          </Suspense>
        }
      />
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

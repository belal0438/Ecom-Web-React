import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.js";
import StorePage from "./components/Store/StorePart/gridCard";
import About from "./components/About/about";
import Home from "./components/Home/home.js";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<StorePage />} />
      <Route path="About" element={<About />} />
      <Route path="Home" element={<Home />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

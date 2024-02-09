import React from "react";

import GenericsHeading from "./Generics/genericsHeading";
import StoreCard from "./StorePart/gridCard";

const HomePage = () => {
  return (
    <>
      <div style={{ marginTop: "60px" }}>
        <GenericsHeading />
      </div>
      <StoreCard />
    </>
  );
};

export default HomePage;

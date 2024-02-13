import React from "react";
import ProductDetails from "./productDetails";
import { useParams } from "react-router-dom";

const productsArr = [
  {
    id: "d1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "d2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "d3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "d4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductDetailValue = () => {
  const { ProductId } = useParams();
  //   console.log("ProductId", ProductId);
  const productDetails = productsArr.filter((Ele) => Ele.id === ProductId);
  //   console.log(productDetails);
  return (
    <>
      <ProductDetails productDetails={productDetails} />
    </>
  );
};

export default ProductDetailValue;

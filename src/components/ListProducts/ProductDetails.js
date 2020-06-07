import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation();

  console.log(state);

  return <div></div>;
};

export default ProductDetails;

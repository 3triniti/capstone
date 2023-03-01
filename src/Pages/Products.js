import React from "react";
import { useGetProductQuery } from "../app/services/api";

function Products() {
  const { data } = useGetProductQuery();

  return (
    <>
      <div className="">
        <div className="">
          {data.product.map((product) => (
            <img className="" src={product.image} alt={product?.name} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;

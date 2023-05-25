import React from "react";
import { useGetProductsByCategoryQuery } from "../store/shopAPI";
import { useParams } from "react-router";
import CardProduct from "../components/CardProduct";

export default function ProductsByCategory() {
  const { id } = useParams();
  const {
    data: productsByCategory,
    isFetching,
    isError,
  } = useGetProductsByCategoryQuery(id);

  return (
    <div className="flex-1">
      <ul className="flex flex-wrap justify-between gap-2 px-3">
        {productsByCategory?.map((productByCategory) => (
          <li key={productByCategory.id}>
            <CardProduct product={productByCategory} />
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import { useGetProductsByCategoryQuery } from "../store/shopAPI";
import { useParams } from "react-router";

export default function ProductsByCategory() {
  const { id } = useParams();

  const {
    data: ProductsByCategory,
    isFetching,
    isError,
  } = useGetProductsByCategoryQuery(parseInt(id));

  return (
    <div className="m-9">
      ProductsByCategory
      <ul className="mt-4">
        {ProductsByCategory?.map((ProductByCategory) => (
          <li key={ProductByCategory.id}>{ProductByCategory.title}</li>
        ))}
      </ul>
    </div>
  );
}

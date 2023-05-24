import React from "react";
import { useGetProductsByCategoryQuery } from "../store/shopAPI";
import { useParams } from "react-router";

export default function ProductsByCategory() {
  const { id } = useParams();
  let idString: string = "";
  if (id) {
    idString = id;
  }
  const {
    data: ProductsByCategory,
    isFetching,
    isError,
  } = useGetProductsByCategoryQuery(parseInt(idString));

  return (
    <div className="flex-1">
      ProductsByCategory
      <ul className="mt-4">
        {ProductsByCategory?.map((ProductByCategory) => (
          <li key={ProductByCategory.id}>{ProductByCategory.title}</li>
        ))}
      </ul>
    </div>
  );
}

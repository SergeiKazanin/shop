import React from "react";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../store/shopAPI";

export default function CategorisMenu() {
  const { data: categories, isFetching, isError } = useGetCategoriesQuery("");

  console.log(categories);
  return (
    <div className="w-full">
      <ul>
        {categories?.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

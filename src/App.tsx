import React from "react";
import { useGetCategoriesQuery } from "./store/shopAPI";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

function App() {
  const { data: categories, isFetching, isError } = useGetCategoriesQuery("");
  console.log(categories);
  return (
    <div className="m-6">
      <ul>
        {categories?.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default App;

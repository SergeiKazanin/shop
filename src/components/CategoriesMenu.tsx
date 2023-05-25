import React from "react";
import { NavLink } from "react-router-dom";
import { useGetCategoriesQuery } from "../store/shopAPI";
import { hover } from "@testing-library/user-event/dist/hover";

export default function CategorisMenu() {
  const { data: categories, isFetching, isError } = useGetCategoriesQuery("");

  return (
    <div className="bg-neutral-800 p-5 shadow-lg rounded-xl h-min  flex justify-center items-center w-[150px]">
      <ul>
        {categories?.map((category) => (
          <li key={category.id}>
            <NavLink
              className="hover:text-white"
              to={`/category/${category.id}`}
              style={({ isActive }) => ({
                color: isActive ? "#FFFFFF" : "inherit",
              })}
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

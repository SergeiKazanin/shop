import React from "react";
import { NavLink } from "react-router-dom";
import { useGetCategoriesQuery } from "../store/shopAPI";
import { hover } from "@testing-library/user-event/dist/hover";

export default function CategorisMenu() {
  const { data: categories, isFetching, isError } = useGetCategoriesQuery("");

  return (
    <div className="bg-neutral-800 p-5 shadow-lg rounded-xl h-min flex justify-center items-center w-[180px] min-w-[180px]">
      <ul className="flex flex-col gap-2">
        {categories?.map((category) => (
          <li key={category.id}>
            <NavLink
              className="hover:text-white"
              to={`/category/${category.id}/1`}
              style={({ isActive }) => ({
                color: isActive ? "#FFFFFF" : "",
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

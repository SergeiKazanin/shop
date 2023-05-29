import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "../store/shopAPI";

export default function CategorisMenu() {
  const { data: categories, isFetching, isError } = useGetCategoriesQuery("");
  const [rabdProd, setRabdProd] = useState(true);
  const navigate = useNavigate();
  let d = true;
  useEffect(() => {
    navigate("/categoryrand");
    setRabdProd(false);
    console.log(232);
    return () => {};
  }, [navigate, rabdProd]);

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

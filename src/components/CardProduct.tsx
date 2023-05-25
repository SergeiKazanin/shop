import React from "react";
import { ProductByCategory } from "../models/models";

export default function CardProduct({
  product,
}: {
  product: ProductByCategory;
}) {
  return (
    <div className="w-[200px] h-[300px] flex flex-col shadow-xl overflow-hidden rounded-xl bg-neutral-800">
      <div
        style={{ backgroundImage: `url(${product.images[0]})` }}
        className="w-full h-[190px] bg-center bg-no-repeat bg-cover"
      ></div>
      <div className="p-3  ">
        <p className="text-lg">{product.title}</p>
        <p className="text-amber-700">{product.price} $</p>
      </div>
    </div>
  );
}

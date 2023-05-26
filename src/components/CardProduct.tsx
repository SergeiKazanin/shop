import React from "react";
import { ProductByCategory } from "../models/models";
import { Link } from "react-router-dom";

export default function CardProduct({
  product,
}: {
  product: ProductByCategory;
}) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="w-[202px] h-[350px] flex flex-col shadow-xl overflow-hidden rounded-xl bg-neutral-800">
        <div
          style={{ backgroundImage: `url(${product.images[0]})` }}
          className="w-full h-[230px] bg-center bg-no-repeat bg-cover"
        ></div>
        <div className="p-3 flex flex-1 flex-col">
          <p className="text-base">{product.title}</p>
          <p className="text-amber-700 flex-1 flex items-end">
            {product.price} $
          </p>
        </div>
      </div>
    </Link>
  );
}

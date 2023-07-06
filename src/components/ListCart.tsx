import React, { useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";

export default function ListCart() {
  const { cart } = useAppSelector((store) => store.shopLocalStore);
  const { addToCart, delToCart } = useActions();

  return (
    <>
      {cart.map((product) => (
        <div
          key={product.id}
          className="flex gap-3 items-center w-full p-2 rounded-lg bg-neutral-700"
        >
          <div className="flex items-center gap-3 w-3/5">
            <div
              style={{ backgroundImage: `url(${product?.images[0]})` }}
              className="w-[50px] h-[50px] bg-center rounded-lg bg-no-repeat bg-cover"
            ></div>
            <Link className="hover:text-white" to={`/products/${product.id}`}>
              {product.title}
            </Link>
          </div>
          <div className="flex flex-1 justify-end gap-3 w-2/5">
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  addToCart({
                    ...product,
                    quantity: Math.max(1, product.quantity - 1),
                  })
                }
              >
                <RemoveIcon className="hover:text-white" />
              </button>
              <div className="w-10 flex justify-center">{product.quantity}</div>
              <button
                onClick={() =>
                  addToCart({ ...product, quantity: product.quantity + 1 })
                }
              >
                <AddIcon className="hover:text-white" />
              </button>
            </div>

            <button onClick={() => delToCart(product)}>
              <DeleteIcon className="hover:text-white" />
            </button>
            <div className="w-28 flex justify-end whitespace-nowrap">
              {product.price * product.quantity} $
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

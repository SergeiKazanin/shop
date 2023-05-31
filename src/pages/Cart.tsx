import React from "react";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Cart() {
  const { cart } = useAppSelector((store) => store.shopLocalStore);
  const { addToCart, delToCart } = useActions();
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].price * cart[i].quantity;
  }

  return (
    <div className="ml-5 flex flex-col gap-3 w-full shadow-lg rounded-lg p-5 h-min bg-neutral-800">
      {cart.map((product, i) => {
        let quant = product.quantity;
        return (
          <div
            key={i}
            className="flex gap-3 items-center w-full p-2 rounded-lg bg-neutral-700"
          >
            <div className="flex items-center gap-3 w-3/5">
              <div
                style={{ backgroundImage: `url(${product?.images[0]})` }}
                className="w-[50px] h-[50px] bg-center rounded-lg bg-no-repeat bg-cover"
              ></div>
              <div>{product.title}</div>
            </div>
            <div className="flex flex-1 justify-end gap-3 w-2/5">
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    addToCart({ ...product, quantity: Math.max(1, --quant) })
                  }
                >
                  <RemoveIcon />
                </button>
                <div className="w-10 flex justify-center">
                  {product.quantity}
                </div>
                <button
                  onClick={() => addToCart({ ...product, quantity: ++quant })}
                >
                  <AddIcon />
                </button>
              </div>

              <button onClick={() => delToCart(product)}>
                <DeleteIcon />
              </button>
              <div className="w-28 flex justify-end whitespace-nowrap">
                {product.price * quant} $
              </div>
            </div>
          </div>
        );
      })}
      {totalPrice === 0 ? (
        <div>Add something</div>
      ) : (
        <div>Total price {totalPrice} $</div>
      )}
    </div>
  );
}

import React from "react";
import { useAppSelector } from "../hooks/redux";
import ListCart from "../components/ListCart";

export default function Cart() {
  const { cart } = useAppSelector((store) => store.shopLocalStore);

  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].price * cart[i].quantity;
  }

  return (
    <div className="ml-5 flex flex-col gap-3 w-full shadow-lg rounded-lg p-5 h-min bg-neutral-800">
      <ListCart />
      {totalPrice === 0 ? (
        <div>Add something</div>
      ) : (
        <div>Total price {totalPrice} $</div>
      )}
    </div>
  );
}

import React from "react";
import { useAppSelector } from "../hooks/redux";
export default function TotalPrice() {
  const { cart } = useAppSelector((store) => store.shopLocalStore);
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].price * cart[i].quantity;
  }

  return (
    <>
      {totalPrice === 0 ? (
        <div>Add something</div>
      ) : (
        <div>Total price {totalPrice} $</div>
      )}
    </>
  );
}

import React, { useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";

export default function Cart() {
  const { card } = useAppSelector((store) => store.shop);
  const { toggleForm } = useActions();
  let totalPrice = 0;

  for (let i = 0; i < card.length; i++) {
    totalPrice = totalPrice + card[i].price;
  }

  return (
    <div className="ml-5 flex flex-col gap-3 w-full shadow-lg rounded-lg p-5 h-min bg-neutral-800">
      {card.map((product, i) => (
        <div
          key={i}
          className="flex gap-3 items-center p-2 rounded-lg bg-neutral-700"
        >
          <div
            style={{ backgroundImage: `url(${product?.images[0]})` }}
            className="w-[50px] h-[50px] bg-center rounded-lg bg-no-repeat bg-cover"
          ></div>
          <div>{product.title}</div>
          <div>{product.price} $</div>
        </div>
      ))}
      <div>Total price {totalPrice}</div>
    </div>
  );
}

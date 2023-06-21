import React from "react";

import ListCart from "../components/ListCart";
import TotalPrice from "../components/TotalPrice";

export default function Cart() {
  return (
    <div className="ml-5 flex flex-col gap-3 w-full shadow-lg rounded-lg p-5 h-min bg-neutral-800">
      <ListCart />
      <TotalPrice />
    </div>
  );
}

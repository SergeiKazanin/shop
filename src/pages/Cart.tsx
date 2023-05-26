import React, { useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";

export default function Cart() {
  const { card } = useAppSelector((store) => store.shop);
  const { toggleForm } = useActions();
  return <div>{card[0]?.title}</div>;
}

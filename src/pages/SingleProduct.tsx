import React from "react";
import { useParams } from "react-router";
import { useGetProductsByIdQuery } from "../store/shopAPI";

export default function SingleProduct() {
  const { id } = useParams();

  const { data, isFetching, isError } = useGetProductsByIdQuery(id);
  console.log(data);
  return <div>{data?.description}</div>;
}

import React, { useState } from "react";
import { useParams } from "react-router";
import { useGetProductsByIdQuery } from "../store/shopAPI";
import { useActions } from "../hooks/actions";

export default function SingleProduct() {
  const { id } = useParams();
  const [numImg, setNumImg] = useState(0);
  const { data, isFetching, isError } = useGetProductsByIdQuery(id);
  const { addToCart } = useActions();
  return data ? (
    <div className="ml-5 flex rounded-lg p-5 h-min bg-neutral-800">
      <div>
        <div
          style={{ backgroundImage: `url(${data?.images[numImg]})` }}
          className="w-[400px] h-[400px] bg-center rounded-lg bg-no-repeat bg-cover"
        ></div>
        <div className="flex gap-3 mt-5">
          {data?.images.map((img, i) => (
            <div
              onClick={() => setNumImg(i)}
              style={{ backgroundImage: `url(${data?.images[i]})` }}
              className="w-[100px] h-[100px] bg-center cursor-pointer rounded-lg bg-no-repeat bg-cover"
            ></div>
          ))}
        </div>
      </div>
      <div className="ml-5">
        <div className="mb-5 text-2xl">{data?.title}</div>
        <div className="mb-5">{data?.description}</div>
        <div className="mb-5">{data?.price} $</div>
        <button
          onClick={() => addToCart(data)}
          className="rounded-xl w-56 text-white bg-purple-700 hover:bg-purple-800 p-2 shadow-md"
        >
          Add to cart
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
}

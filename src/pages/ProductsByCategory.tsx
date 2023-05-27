import React, { useEffect, useState } from "react";
import { useGetProductsByCategoryQuery } from "../store/shopAPI";
import { useParams, useNavigate } from "react-router";
import CardProduct from "../components/CardProduct";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";

export default function ProductsByCategory() {
  const { id, p } = useParams();
  let page: number = 1;
  if (p) {
    page = parseInt(p);
  }
  const navigate = useNavigate();
  const [totalPage, setTotalPage] = useState(0);
  const totalElementOnPage = 8;

  const {
    data: productsByCategory,
    isFetching,
    isError,
  } = useGetProductsByCategoryQuery(id);

  useEffect(() => {
    if (productsByCategory?.length) {
      const x = productsByCategory.length / totalElementOnPage;
      x - Math.floor(x) > 0
        ? setTotalPage(Math.floor(x) + 1)
        : setTotalPage(Math.floor(x));
    }
    return () => {};
  }, [productsByCategory]);

  return (
    <div className="flex-1 flex justify-start items-center flex-col">
      {isFetching && <CircularProgress />}
      {!isFetching && (
        <>
          <ul className="flex flex-wrap justify-stretch mb-3 gap-2 pl-3">
            {productsByCategory
              ?.slice(
                page * totalElementOnPage - totalElementOnPage,
                page * totalElementOnPage
              )
              .map((productsByCategory) => (
                <li key={productsByCategory.id}>
                  <CardProduct product={productsByCategory} />
                </li>
              ))}
          </ul>
          <Pagination
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#A3A3A3",
                fontSize: "1.5rem",
              },
            }}
            count={totalPage}
            page={page}
            onChange={(_, numPage) => navigate(`/category/${id}/${numPage}`)}
            className="mt-3"
          />
        </>
      )}
    </div>
  );
}

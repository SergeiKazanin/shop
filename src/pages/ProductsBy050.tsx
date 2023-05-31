import { useGetProducts0_50Query } from "../store/shopAPI";
import CardProduct from "../components/CardProduct";
import CircularProgress from "@mui/material/CircularProgress";

export default function ProductsByC050() {
  const { data: productsByCategory, isFetching } = useGetProducts0_50Query("");

  return (
    <div className="flex-1 flex justify-start items-center flex-col">
      {isFetching && <CircularProgress />}
      {!isFetching && (
        <>
          <ul className="flex flex-wrap justify-stretch mb-3 gap-2 pl-3">
            {productsByCategory?.slice(30, 38).map((productsByCategory) => (
              <li key={productsByCategory.id}>
                <CardProduct product={productsByCategory} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

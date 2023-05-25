import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import { useLazyGetProductsByTitleQuery } from "../store/shopAPI";
import { useDebounce } from "../hooks/debounce";
import { useActions } from "../hooks/actions";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const { toggleForm } = useActions();
  const debounced = useDebounce(searchValue);
  const [getProductsByTitle, { isFetching, isError, data: productsByTitle }] =
    useLazyGetProductsByTitleQuery();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    if (debounced.length > 0) {
      getProductsByTitle(debounced);
    }
    return () => {};
  }, [debounced, getProductsByTitle]);

  const handleLoginUser = () => {
    toggleForm(true);
  };

  return (
    <div className="h-12 flex justify-around items-center">
      <Link to={"/"} className="font-baebneue text-4xl hover:text-white">
        SHOP
      </Link>
      <div
        onClick={handleLoginUser}
        className="relative cursor-pointer hover:text-white"
      >
        Login
        <LoginIcon />
      </div>

      <form className="w-[350px] flex items-center border-2 border-black rounded-xl">
        <SearchIcon className="ml-2" />
        <input
          type="search"
          name="search"
          placeholder="Search for anyting..."
          autoComplete="off"
          className="h-9 mr-2 text-2xl placeholder-black relative w-full outline-none  bg-inherit"
          onChange={handleSearch}
          value={searchValue}
        />
        {searchValue && (
          <div className="absolute w-[350px] text-lg p-3 max-h-80 overflow-y-auto scrollbar bg-slate-300 rounded-xl top-12 z-10 flex flex-col gap-2">
            {isFetching
              ? "Loading"
              : !productsByTitle?.length
              ? "No results"
              : productsByTitle.map((product) => {
                  return (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="flex items-center gap-2"
                    >
                      <div
                        style={{ backgroundImage: `url(${product.images[0]})` }}
                        className="w-[50px] h-[50px] rounded-md bg-center bg-no-repeat bg-cover"
                      ></div>
                      <div>{product.title}</div>
                    </Link>
                  );
                })}
          </div>
        )}
      </form>

      <ShoppingBasketIcon />
    </div>
  );
}

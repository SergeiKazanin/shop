import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import { useLazyGetProductsByTitleQuery } from "../store/shopAPI";
import { useDebounce } from "../hooks/debounce";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [userLogo, setUserLogo] = useState("Guest");
  const { toggleForm } = useActions();
  const { user } = useAppSelector((store) => store.shop);
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

  useEffect(() => {
    if (!user?.name) return;
    setUserLogo(user.name);
    return () => {};
  }, [user]);

  return (
    <div className="h-24 flex justify-around items-center">
      <Link to={"/"} className="font-baebneue text-4xl hover:text-white">
        SHOP
      </Link>
      <div
        onClick={() => toggleForm(true)}
        className="relative cursor-pointer hover:text-white"
      >
        {userLogo}
        <LoginIcon />
      </div>

      <form className="w-[350px] flex items-center bg-neutral-800 rounded-xl">
        <SearchIcon className="ml-2" />
        <input
          type="search"
          name="search"
          placeholder="Search for anyting..."
          autoComplete="off"
          className="h-11 mr-2 text-xl placeholder-neutral-400 relative w-full outline-none  bg-inherit"
          onChange={handleSearch}
          value={searchValue}
        />
        {searchValue && (
          <div className="absolute w-[350px] text-lg p-3 max-h-80 overflow-y-auto scrollbar bg-neutral-800 rounded-xl top-20 z-10 flex flex-col gap-2">
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

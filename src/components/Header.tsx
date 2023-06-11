import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import { useLazyGetProductsByTitleQuery } from "../store/shopAPI";
import { useDebounce } from "../hooks/debounce";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [userLogo, setUserLogo] = useState("Login");
  const { toggleForm, userDel, tokenDell, setIsLogin } = useActions();
  const { isLogin, user, loginInProcess } = useAppSelector(
    (store) => store.shop
  );
  const { cart, token } = useAppSelector((store) => store.shopLocalStore);
  const { refresh } = useAuth();
  const debounced = useDebounce(searchValue);
  const [getProductsByTitle, { isFetching, data: productsByTitle }] =
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
    refresh();
    return () => {};
  }, [refresh]);

  useEffect(() => {
    if (user?.name && isLogin) {
      setUserLogo(user.name);
    } else {
      setUserLogo("Login");
    }
    return () => {};
  }, [isLogin, user]);

  return (
    <div className="h-24 flex justify-around items-center">
      <Link to={"/"} className="font-baebneue text-4xl hover:text-white">
        SHOP
      </Link>
      <div
        onClick={() => toggleForm(true)}
        className="cursor-pointer hover:text-white"
      >
        {userLogo}
        <LoginIcon />
      </div>
      <button
        onClick={() => {
          setIsLogin(false);
          tokenDell();
          userDel();
        }}
        className="cursor-pointer hover:text-white"
      >
        Logout
      </button>
      <form className="w-[350px] flex items-center shadow-lg bg-neutral-800 rounded-xl">
        <SearchIcon className="ml-2" />
        <input
          type="search"
          name="search"
          placeholder="Search for anything..."
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
                      onClick={() => setSearchValue("")}
                    >
                      <div
                        style={{ backgroundImage: `url(${product.images[0]})` }}
                        className="w-[50px] h-[50px] rounded-xl bg-center bg-no-repeat bg-cover"
                      ></div>
                      <div>{product.title}</div>
                    </Link>
                  );
                })}
          </div>
        )}
      </form>
      <Link to={"/cart"}>
        <Badge badgeContent={cart.length} color="secondary">
          <ShoppingBasketIcon />
        </Badge>
      </Link>
    </div>
  );
}

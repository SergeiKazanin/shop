import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionsShop } from "../store/slice";
import { actionsShopLocalSrore } from "../store/sliceLocalStore";

const actions = {
  ...actionsShop,
  ...actionsShopLocalSrore,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

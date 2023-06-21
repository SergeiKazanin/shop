import { useActions } from "./actions";
import { useAppSelector } from "./redux";
import { useLazyGetUserQuery, useRefreshTokenMutation } from "../store/shopAPI";

export const useAuth = () => {
  const { setIsLogin, setLoginInProcess, tokenAdd, tokenDell, userAdd,userDel } =
    useActions();
  const { isLogin, loginInProcess } = useAppSelector((store) => store.shop);
  const { token } = useAppSelector((store) => store.shopLocalStore);
  const [loginUser] = useLazyGetUserQuery();
  const [refreshToken] = useRefreshTokenMutation();

  const refresh = async () => {
    if (!isLogin && !loginInProcess) {
      if (token.access_token) {
        setLoginInProcess(true);
        try {
          const user = await loginUser(token.access_token).unwrap();
          userAdd(user);
          setLoginInProcess(false);
          setIsLogin(true);
        } catch (error:any) {

          if(error?.status === 401){           
            if(token.refresh_token ){ 
              try {
                const tokenRefresh = await refreshToken(token.refresh_token).unwrap();
                tokenAdd(tokenRefresh);
                setIsLogin(false);
                setLoginInProcess(false);
              } catch (error:any) {
                userDel();
                tokenDell();
                setIsLogin(false);
                setLoginInProcess(false);
              }
            }
          }
        }
      }
    }
  };
  return {refresh} ;
};

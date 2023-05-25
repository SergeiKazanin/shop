import React, { useEffect, useState } from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { useLazyGetUserQuery, useLoginUserMutation } from "../store/shopAPI";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

export default function UserSignForm() {
  const { toggleTypeForm, toggleForm, tokenAdd, userAdd } = useActions();
  const { token, user } = useAppSelector((store) => store.shop);
  const [loginUser, { data: loginUserResp, isError }] = useLoginUserMutation();
  const [getUser, { data: userLoad }] = useLazyGetUserQuery();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isNotEmpty = Object.values(values).every((val) => val);
    if (!isNotEmpty) return;
    await loginUser(values);
  };

  useEffect(() => {
    if (loginUserResp) {
      tokenAdd(loginUserResp);
    }
    return () => {};
  }, [loginUserResp, tokenAdd]);

  useEffect(() => {
    if (token?.access_token && !user.name) {
      getUser(token.access_token);
    }
    return () => {};
  }, [getUser, token]);

  useEffect(() => {
    if (userLoad) {
      console.log(userLoad);
      toggleForm(false);
      userAdd(userLoad);
    }
    return () => {};
  }, [toggleForm, userAdd, userLoad]);

  return (
    <div>
      <IconButton onClick={() => toggleForm(false)}>
        <CloseIcon />
      </IconButton>
      <div>Login</div>

      {isError && <p>Error try again</p>}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
            value={values.email}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Your password"
            name="password"
            autoComplete="off"
            onChange={handleChange}
            value={values.password}
            required
          />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => toggleTypeForm("signUp")}
        >
          Create an account
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

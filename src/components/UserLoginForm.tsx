import React, { useEffect, useState } from "react";
import { useActions } from "../hooks/actions";
import { useLoginUserMutation } from "../store/shopAPI";
import CloseIcon from "@mui/icons-material/Close";

export default function UserSignForm() {
  const { toggleTypeForm, toggleForm, tokenAdd, snakeOn } = useActions();
  const [loginUser, { data: loginUserResp, isError }] = useLoginUserMutation();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isNotEmpty = Object.values(values).every((val) => val);
    if (!isNotEmpty) return;
    loginUser(values);
  };

  useEffect(() => {
    if (loginUserResp) {
      tokenAdd(loginUserResp);
      snakeOn(true);
      toggleForm(false);
    }
    return () => {};
  }, [loginUserResp, snakeOn, toggleForm, tokenAdd]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className=" z-[21] p-6 flex flex-col gap-3 text-neutral-400  items-center bg-neutral-800 rounded-xl h-[500px] w-[500px]"
    >
      <div
        onClick={() => toggleForm(false)}
        className="flex w-full justify-end hover:text-white cursor-pointer"
      >
        <CloseIcon />
      </div>

      <div className="text-white">Login</div>

      {isError && <p>Error try again</p>}
      <form
        className="flex flex-col gap-3 items-center justify-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <input
            className="h-9 p-1 w-[350px] placeholder-black relative  outline-none rounded-xl bg-neutral-700  bg-inherit"
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
            className="h-9 p-1 w-[350px] placeholder-black relative  outline-none rounded-xl bg-neutral-700  bg-inherit"
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
          className="cursor-pointer hover:text-white"
          onClick={() => toggleTypeForm("signUp")}
        >
          Create an account
        </div>
        <button
          className="rounded-xl w-56 text-white bg-purple-700 hover:bg-purple-800 p-2 shadow-md"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

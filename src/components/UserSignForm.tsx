import React, { useEffect, useState } from "react";
import { useActions } from "../hooks/actions";
import { useCreateUserMutation } from "../store/shopAPI";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

export default function UserSignForm() {
  const { toggleTypeForm, toggleForm } = useActions();

  const [createUser, { data, isError }] = useCreateUserMutation();
  const [values, setValues] = useState({
    name: "test",
    email: "test@mail.com",
    password: "1234",
    avatar: "https://api.lorem.space/",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;
    createUser(values);
  };

  useEffect(() => {
    if (data) {
      toggleForm(false);
    }
    return () => {};
  }, [data, toggleForm]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className=" z-[21] p-6 flex flex-col gap-3 text-neutral-400  items-center bg-neutral-800 rounded-2xl h-[500px] w-[500px] top-0 right-0"
    >
      <div className="flex w-full justify-end">
        <IconButton onClick={() => toggleForm(false)}>
          <CloseIcon color="warning" />
        </IconButton>
      </div>

      <div className="text-white">Sign Up</div>
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
            type="name"
            placeholder="Your name"
            name="name"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
            value={values.name}
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
        <div>
          <input
            className="h-9 p-1 w-[350px] placeholder-black relative  outline-none rounded-xl bg-neutral-700  bg-inherit"
            type="avatar"
            placeholder="Your avatar"
            name="avatar"
            autoComplete="off"
            onChange={handleChange}
            value={values.avatar}
            required
          />
        </div>
        <div
          className="cursor-pointer hover:text-white"
          onClick={() => toggleTypeForm("login")}
        >
          I already have an account
        </div>
        <button
          className="rounded-xl w-56 text-white bg-violet-700 hover:bg-violet-800 p-2 shadow-md"
          type="submit"
        >
          Create an account
        </button>
      </form>
    </div>
  );
}

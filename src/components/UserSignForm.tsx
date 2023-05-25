import React, { useState } from "react";
import { useActions } from "../hooks/actions";
import { useCreateUserMutation } from "../store/shopAPI";

export default function UserSignForm() {
  const { toggleTypeForm, toggleForm } = useActions();
  const [createUser, { data, isError }] = useCreateUserMutation();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  console.log(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;
    createUser(values);
    //toggleForm(false);
  };

  return (
    <div>
      <div>Sign Up</div>
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
            type="avatar"
            placeholder="Your avatar"
            name="avatar"
            autoComplete="off"
            onChange={handleChange}
            value={values.avatar}
            required
          />
        </div>

        <div className="cursor-pointer" onClick={() => toggleTypeForm("login")}>
          I already have an account
        </div>

        <button type="submit">Create an account</button>
      </form>
    </div>
  );
}

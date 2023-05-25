import React from "react";
import { useActions } from "../hooks/actions";

export default function UserLoginForm() {
  const { toggleTypeForm } = useActions();
  return (
    <div>
      <div>Log In</div>
      <form>
        <div>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            autoComplete="off"
            required
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Your password"
            name="password"
            autoComplete="off"
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

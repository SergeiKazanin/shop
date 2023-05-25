import React from "react";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";
import UserLoginForm from "./UserLoginForm";
import UserSignForm from "./UserSignForm";

export default function UserForm() {
  const { showForm, formType } = useAppSelector((store) => store.shop);
  const { toggleForm } = useActions();

  return showForm ? (
    <div
      onClick={() => toggleForm(false)}
      className="fixed flex justify-center items-center login-user w-full h-full top-0 left-0 z-20"
    >
      {formType === "login" ? <UserLoginForm /> : <UserSignForm />}
    </div>
  ) : (
    <></>
  );
}

import React from "react";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";
import UserLoginForm from "./UserLoginForm";
import UserSignForm from "./UserSignForm";

export default function UserForm() {
  const { showForm, formType } = useAppSelector((store) => store.shop);
  const { toggleForm } = useActions();

  return showForm ? (
    <div>{formType === "login" ? <UserLoginForm /> : <UserSignForm />}</div>
  ) : (
    <></>
  );
}

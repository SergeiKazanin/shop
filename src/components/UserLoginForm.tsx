import React, { useEffect, useState } from "react";
import { useActions } from "../hooks/actions";
import { useLoginUserMutation } from "../store/shopAPI";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function UserSignForm() {
  const { toggleTypeForm, toggleForm, tokenAdd, snakeOn } = useActions();
  const [loginUser, { data: loginUserResp, isError }] = useLoginUserMutation();

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
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .min(4, "Too Short!")
            .max(10, "Too Long!")
            .required("Required"),
          email: Yup.string().email("Invalid email").required("Required"),
        })}
        onSubmit={(values) => {
          loginUser(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-3 items-center justify-center">
            <Field
              className="h-9 p-1 w-[350px] placeholder-black relative  outline-none rounded-xl bg-neutral-700  bg-inherit"
              name="email"
              type="email"
            />
            <ErrorMessage name="email" />
            <Field
              className="h-9 p-1 w-[350px] placeholder-black relative  outline-none rounded-xl bg-neutral-700  bg-inherit"
              name="password"
              type="password"
            />
            <ErrorMessage name="password" />
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
          </Form>
        )}
      </Formik>
    </div>
  );
}

"use client";
import { login_schema } from "@/utils/validation-schema";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import ErrorMsg from "../common/ErrorMsg";
import { toast } from "react-toastify";
import { loginUser } from "@/services/auth";

type LoginFormProps = {
  dict: { [key: string]: string } | null;
};
const LoginForm = ({ dict }: LoginFormProps) => {
  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: login_schema,
      onSubmit: (values, { resetForm }) => {
        loginUser(values).then((res) => {
          if (res.ResponseCode === 200) {
            toast.success(dict?.Login_successfully);
            resetForm();
          }
        });
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="bb-input2-box mb-25">
        <input
          id="name"
          type="text"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={dict?.Email}
          required
        />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className="bb-input2-box mb-50">
        <input
          id="pass"
          name="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          type="password"
          placeholder={dict?.Password}
          required
        />
        {touched.password && <ErrorMsg error={errors.password} />}
      </div>
      <div className="bb-submit-btn mb-40">
        <button className="unfill__btn d-block w-100" type="submit">
          {dict?.Login}
        </button>
      </div>
      <div className="bb-not-account mb-35 text-center">
        <p>
          {dict?.Dont_have_account}{" "}
          <Link href="/signup">{dict?.Register_Now}</Link>
        </p>
      </div>
      <div className="bb-forget-pass text-center">
        <Link href="/forgot-password">{dict?.Forgot_password}</Link>
      </div>
    </form>
  );
};

export default LoginForm;

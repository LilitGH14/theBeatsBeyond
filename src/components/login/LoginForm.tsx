"use client";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import ErrorMsg from "../common/ErrorMsg";
import { toast } from "react-toastify";
import { loginUser } from "@/services/auth";
import { login_schema } from "@/utils/validation-schema";

type authFormProps = {
  dict: { [key: string]: string } | null;
};
const LoginForm = ({ dict }: authFormProps) => {
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
            toast.success(dict?.login_successfully);
            resetForm();
          }
        });
      },
    });

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="row">
        <div className="bb-auth__input-box col-12">
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
        <div className="bb-auth__input-box col-12">
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
        <div className="bb-auth__input-box col-12">
          <button className="bb-auth__btn w-100" type="submit">
            {dict?.Login}
          </button>
        </div>
        <div className="bb-auth__input-box col-12">
          <p className="bb-auth__link">
            {dict?.Dont_have_account}
            <Link href="/signup" className="bb-auth__link-a">{dict?.Register_Now}</Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

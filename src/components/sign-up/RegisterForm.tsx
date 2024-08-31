"use client";
import { register_schema } from "@/utils/validation-schema";
import { useFormik } from "formik";
import React, { useState } from "react";
import ErrorMsg from "../common/ErrorMsg";
import Link from "next/link";
import { registerUser } from "@/services/auth";
import { useRouter } from "next/navigation";

type SignUpFormProps = {
  dict: { [key: string]: string } | null;
};
const RegisterForm = ({ dict }: SignUpFormProps) => {
  const router = useRouter();

  const [generalError, setGeneralError] = useState<string>("");

  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
      initialValues: {
        role: "fan",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: register_schema,
      onSubmit: (values) => {
        registerUser(values)
          .then((res) => {
            if (res.ResponseCode === 200) {
              router.push("/login");
            }
          })
          .catch((err) => {
            setGeneralError(err.response?.data?.ErrorMessage);
          });
      },
    });

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="row">
        <div className="bb-auth__input-box col-12">
          <select
            name="role"
            value={values.role}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          >
            <option value="fan">{dict?.Fan}</option>
            <option value="songWriter">{dict?.SongWriter}</option>
          </select>
        </div>
        <div className="bb-auth__input-box col-12">
          <input
            type="email"
            placeholder={dict?.Email}
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
          {touched.email && <ErrorMsg error={errors.email} />}
        </div>
        <div className="bb-auth__input-box col-12">
          <input
            type="password"
            placeholder={dict?.Password}
            name="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
          {touched.password && <ErrorMsg error={errors.password} />}
        </div>
        <div className="bb-auth__input-box col-12">
          <input
            type="password"
            placeholder={dict?.Confirm_password}
            name="confirmPassword"
            value={values.confirmPassword}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
          {touched.confirmPassword && (
            <ErrorMsg error={errors.confirmPassword} />
          )}
        </div>
        <div className="bb-auth__input-box col-12">
          {!!generalError && <ErrorMsg error={generalError} />}
        </div>
        <div className="bb-auth__input-box col-12">
          <button className="bb-auth__btn w-100" type="submit">
            {dict?.Create_account}
          </button>
        </div>
        <div className="bb-auth__input-box col-12">
          <p className="bb-auth__link">
            {dict?.Have_account}
            <Link href="/login" className="bb-auth__link-a">
              {dict?.Login}
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;

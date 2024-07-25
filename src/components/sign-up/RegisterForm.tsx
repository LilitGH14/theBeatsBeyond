"use client";
import { register_schema } from "@/utils/validation-schema";
import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import ErrorMsg from "../common/ErrorMsg";
import Link from "next/link";
import { registerUser } from "@/services/auth";

type SignUpFormProps = {
  dict: { [key: string]: string } | null;
};
const RegisterForm = ({ dict }: SignUpFormProps) => {
  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
      initialValues: {
        role: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: register_schema,
      onSubmit: (values, { resetForm }) => {
        registerUser(values).then((res) => {
          if (res.ResponseCode === 200) {
            toast.success(dict?.Register_successfully);
            resetForm();
          }
        });
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="bb-input2-box mb-25">
        <select
          name="role"
          value={values.role}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        >
          <option value="" disabled selected>
            {dict?.SelectRole}
          </option>
          <option value="fan">{dict?.Fan}</option>
          <option value="songWriter">{dict?.SongWriter}</option>
        </select>
        {touched.role && <ErrorMsg error={errors.role} />}
      </div>
      <div className="bb-input2-box mb-25">
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
      <div className="bb-input2-box mb-25">
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
      <div className="bb-input2-box mb-50">
        <input
          type="password"
          placeholder={dict?.Confirm_password}
          name="confirmPass"
          value={values.confirmPassword}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />
        {touched.confirmPassword && <ErrorMsg error={errors.confirmPassword} />}
      </div>
      <div className="bb-submit-btn mb-40 text-center">
        <button className="unfill__btn d-block w-100" type="submit">
          {dict?.Create_account}
        </button>
      </div>
      <div className="bb-not-account mb-35 text-center">
        <p>
          {dict?.Have_account} <Link href="/login">{dict?.Login}</Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;

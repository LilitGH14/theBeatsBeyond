"use client";
import { contact_schema } from "@/utils/validation-schema";
import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import ErrorMsg from "../common/ErrorMsg";
import { sendMessageFromContact } from "@/services/contact";

type ContactFormProps = {
  dict: { [key: string]: string };
};
const ContactForm = ({ dict }: ContactFormProps) => {
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        number: "",
        subject: "",
        massage: "",
      },
      validationSchema: contact_schema,
      onSubmit: (values, { resetForm }) => {
        sendMessageFromContact(values).then((res) => {
          if (res.ResponseCode === 200) {
            toast.success(dict?.Success_message);
            resetForm();
          }
        });
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="bb-contact__input-box">
            <input
              type="text"
              placeholder={dict?.Name}
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="bb-contact__input-box">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              id="email"
              required
              placeholder={dict?.Email}
            />
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="bb-contact__input-box">
            <input
              type="text"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={dict?.Subject}
              required
            />
            {touched.subject && <ErrorMsg error={errors.subject} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="bb-contact__input-box">
            <input
              type="text"
              name="number"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={dict?.Phone_number}
              required
            />
            {touched.number && <ErrorMsg error={errors.number} />}
          </div>
        </div>
        <div className="col-md-12">
          <div className="bb-contact__input-box">
            <textarea
              cols={30}
              rows={10}
              name="massage"
              value={values.massage}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={dict?.Message}
              required
            ></textarea>
            {touched.massage && <ErrorMsg error={errors.massage} />}
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div className="bb-submit-btn">
            <button className="unfill__btn" type="submit">
              {dict?.Send_message}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

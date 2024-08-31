"use client";
import { useFormik } from "formik";
import React from "react";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";
import master from "../../../public/assets/img/payments/master.jpg";
import visa from "../../../public/assets/img/payments/visa.jpg";
import paypal from "../../../public/assets/img/payments/paypal.jpg";
import { savePayment } from "@/services/payment";
import ErrorMsg from "./ErrorMsg";

type PaymentsProps = {
  dict: { [key: string]: string } | null;
};
const Payments = ({ dict }: PaymentsProps) => {
  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
      initialValues: {
        fullname: "",
        cardNumber: "",
        expMonth: "",
        expYear: "",
        cvv: "",
      },
      onSubmit: (values, { resetForm }) => {
        savePayment(values).then((res) => {
          if (res.ResponseCode === 200) {
            resetForm();
            close();
          }
        });
      },
    });

  return (
    <form onSubmit={handleSubmit} className="payment-form-wrapper row">
      <div className="bb-input-box col-12">
        {dict?.Cards}
        <div className="payment_methods-wrapper">
          {[master, visa, paypal].map((payment, i) => {
            return (
              <Image
                className="mr-10"
                key={"payment_" + i}
                loader={imageLoader}
                priority
                width={80}
                height={45}
                src={payment}
                alt={dict?.Payment_default_alt ?? "Payment thumbnail"}
              />
            );
          })}
        </div>
      </div>
      <div className="bb-input-box col-12">
        <input
          id="fullname"
          type="text"
          name="fullname"
          value={values.fullname}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={dict?.Name_on_card}
          required
        />
        {touched.fullname && <ErrorMsg error={errors.fullname} />}
      </div>
      <div className="bb-input-box col-12">
        <input
          id="cardNumber"
          type="number"
          name="cardNumber"
          value={values.cardNumber}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={dict?.Credit_card_number}
          required
        />
        {touched.cardNumber && <ErrorMsg error={errors.cardNumber} />}
      </div>
      <div className="bb-input-box col-12 d-flex date">
        <input
          id="expMonth"
          type="number"
          name="expMonth"
          value={values.expMonth}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={dict?.Exp_month}
          required
        />
        <input
          id="expYear"
          type="number"
          name="expYear"
          value={values.expYear}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={dict?.Exp_year}
          required
        />
        <input
          id="cvv"
          type="number"
          name="cvv"
          value={values.cvv}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={dict?.CVV}
          required
        />
      </div>
      <div className="bb-submit-btn">
        <button className="unfill__btn d-block w-100" type="submit">
          {dict?.Save}
        </button>
      </div>
    </form>
  );
};

export default Payments;

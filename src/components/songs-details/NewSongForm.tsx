"use client";
import { login_schema } from "@/utils/validation-schema";
import { useFormik } from "formik";
import React from "react";
import ErrorMsg from "../common/ErrorMsg";
import { saveNewSong } from "@/services/songs";

type NewStoryFormType = {
  dict: { [key: string]: string } | null;
  close: () => void;
};
const NewStoryForm = ({ dict, close }: NewStoryFormType) => {
  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
      initialValues: {
        songGivenName: "",
        description: "",
        isShared: false,
      },
      validationSchema: login_schema,
      onSubmit: (values, { resetForm }) => {
        saveNewSong(values).then((res) => {
          if (res.ResponseCode === 200) {
            resetForm();
            close();
          }
        });
      },
    });

  return (
    <form onSubmit={handleSubmit} className="new-song">
      <div className="bb-input">
        <input
          id="name"
          type="text"
          name="songGivenName"
          value={values.songGivenName}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={dict?.SongGivenName}
          required
        />
        {touched.songGivenName && <ErrorMsg error={errors.songGivenName} />}
      </div>
      <div className="bb-input">
        <textarea
          id="pass"
          name="description"
          value={values.description}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={dict?.Description}
          required
        />
        {touched.description && <ErrorMsg error={errors.description} />}
      </div>
      <div className="bb-input">
        <label className="bb-checkbox">
          <span>{dict?.Make_Public}</span>
          <input
            name="isShared"
            type="checkbox"
            onChange={handleChange}
            placeholder={dict?.description}
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="bb-submit-btn">
        <button className="unfill__btn d-block w-100" type="submit">
          {dict?.Save}
        </button>
      </div>
    </form>
  );
};

export default NewStoryForm;

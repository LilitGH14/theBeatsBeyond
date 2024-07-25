import { useFormik } from "formik";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ErrorMsg from "./error-msg";
import { commentForm } from "@/utils/validation-schema";

const CommentForm = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        website: "",
        comment: "",
      },
      validationSchema: commentForm,
      onSubmit: (values, { resetForm }) => {
        toast.success("Your comment has been successfully submitted!");
        resetForm();
      },
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xl-6">
            <div className="bb-input2-box mb-30">
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="Last name"
              />
              {touched.name && <ErrorMsg error={errors.name} />}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="bb-input2-box mb-30">
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="Email"
              />
              {touched.email && <ErrorMsg error={errors.email} />}
            </div>
          </div>
          <div className="col-xl-12">
            <div className="bb-input2-box mb-30">
              <input
                type="url"
                name="website"
                value={values.website}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="Website"
              />
              {touched.website && <ErrorMsg error={errors.website} />}
            </div>
          </div>
          <div className="col-xl-12">
            <div className="bb-input2-box mb-30">
              <textarea
                cols={30}
                rows={10}
                name="comment"
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Write Comments . . ."
              ></textarea>
              {touched.comment && <ErrorMsg error={errors.comment} />}
            </div>
          </div>
          <div className="col-xl-12">
            <label className="bb-checkbox">
              <span>
                Save my name, email, and website in this browser for the next
                time I comment.
              </span>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <span className="checkmark"></span>
            </label>
            <div className="bb-submit-btn mt-40">
              <button className="unfill__btn" type="submit">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CommentForm;

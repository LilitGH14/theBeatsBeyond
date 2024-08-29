"use client";
import { useFormik } from "formik";
import React from "react";
import { TAG_OPTIONS } from "@/constants/constants";
import { addStory } from "@/services/stories";
import { toast } from "react-toastify";
import MultiSelect from "../common/MultiSelect";
import { WithContext as ReactTags, SEPARATORS } from "react-tag-input";
import { Tag } from "react-tag-input/types/components/SingleTag";

type StoryFormProps = {
  dict: { [key: string]: string } | null;
};
const StoryForm = ({ dict }: StoryFormProps) => {
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
      tags: [],
      singers: [],
      writers: [],
    },
    onSubmit: (values, { resetForm }) => {
      addStory(values).then((res) => {
        if (res.ResponseCode === 200) {
          toast.success(dict?.Story_is_added_successfully);
          resetForm();
        }
      });
    },
  });

  const removeSinger = (index: number) => {
    setFieldValue(
      "singers",
      values.singers.filter((_, i) => i !== index)
    );
  };

  const removeWriter = (index: number) => {
    setFieldValue(
      "writers",
      values.writers.filter((_, i) => i !== index)
    );
  };

  const addWriters = (writer: Tag) => {
    setFieldValue("writers", [...values.writers, writer]);
  };

  const addSingers = (singer: Tag) => {
    setFieldValue("singers", [...values.singers, singer]);
  };

  return (
    <form onSubmit={handleSubmit} className="row">
      <div className="col-lg-4">
        <div className="bb-input-box">
          <label>{dict?.Story_title_label}</label>
          <input
            type="text"
            name="title"
            value={values.title}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder={dict?.Story_title}
          />
        </div>
        <div className="bb-input-box">
          <label>{dict?.Writers_placeholder}</label>
          <ReactTags
            tags={values.writers}
            name="writers"
            separators={[SEPARATORS.ENTER, SEPARATORS.COMMA]}
            placeholder={dict?.Story_writer_label}
            handleDelete={removeWriter}
            handleAddition={addWriters}
            inputFieldPosition="inline"
            editable
            inline
          />
        </div>
        <div className="bb-input-box">
          <label>{dict?.Singers_placeholder}</label>
          <ReactTags
            tags={values.singers}
            name="singers"
            separators={[SEPARATORS.ENTER, SEPARATORS.COMMA]}
            placeholder={dict?.Story_singer_label}
            handleDelete={removeSinger}
            handleAddition={addSingers}
            inputFieldPosition="inline"
            editable
            inline
          />
        </div>
        <div className="bb-input-box">
          <label>{dict?.Story_tags_label}</label>
          <MultiSelect
            values={values.tags}
            options={TAG_OPTIONS}
            onChange={handleChange}
            name="tags"
            dict={dict ?? {}}
          />
        </div>
      </div>
      <div className="col-lg-8">
        <div className="bb-input-box">
          <label>{dict?.Story_description_label}</label>
          <textarea
            id="description"
            name="description"
            value={values.description}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder={dict?.Story_description}
            required
          />
        </div>
        <div className="bb-input-box">
          <button className="unfill__btn d-block" type="submit">
            {dict?.Add_new_story}
          </button>
        </div>
      </div>
    </form>
  );
};

export default StoryForm;

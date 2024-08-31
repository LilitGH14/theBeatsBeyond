"use client";
import { useFormik } from "formik";
import React, { useState } from "react";
import { TAG_OPTIONS } from "@/constants/constants";
import { addStory } from "@/services/stories";
import MultiSelect from "../common/MultiSelect";
import { WithContext as ReactTags, SEPARATORS } from "react-tag-input";
import { Tag } from "react-tag-input/types/components/SingleTag";
import { useRouter } from "next/navigation";
import { story_schema } from "@/utils/validation-schema";
import ErrorMsg from "../common/ErrorMsg";
import { OptionType } from "@/types/types";

type StoryFormProps = {
  dict: { [key: string]: string } | null;
};
const StoryForm = ({ dict }: StoryFormProps) => {
  const router = useRouter();

  const [singerTagErr, setSingerTagErr] = useState<boolean>(false);
  const [writerTagErr, setWriterTagErr] = useState<boolean>(false);

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
      tags: [],
      singers: [],
      writers: [],
    },
    validationSchema: story_schema,
    onSubmit: (values) => {
      console.log(values,456);

      addStory(values).then((res) => {
        if (res.ResponseCode === 200) {
          router.push("/stories");
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
    console.log(writer,45665)
    if (writer.text.length < 3) {
      setWriterTagErr(true);
      return;
    }

    setFieldValue("writers", [...values.writers, writer]);
    setWriterTagErr(false);
  };

  const addSingers = (singer: Tag) => {
    if (singer.text.length < 3) {
      setSingerTagErr(true);
      return;
    }

    setFieldValue("singers", [...values.singers, singer]);
    setSingerTagErr(false);
  };

  const addMoodTags = (tags: any) => {
    setFieldValue(
      "tags",
      tags.map((m: string) => {
        return (TAG_OPTIONS?.find((f) => f.optionName == m) as OptionType).id;
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className="row">
      <div className="col-lg-4">
        <div className="bb-input-box">
          <label>
            {dict?.Story_title_label}
            <input
              type="text"
              name="title"
              value={values.title}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder={dict?.Story_title}
            />
          </label>
          <div className="p-relative">
            {touched.title && errors.title && <ErrorMsg error={errors.title} />}
          </div>
        </div>
        <div className="bb-input-box">
          <label>{dict?.Writers_placeholder}</label>
          <ReactTags
            tags={values.writers}
            name="writers"
            separators={[SEPARATORS.ENTER, SEPARATORS.COMMA]}
            placeholder={
              writerTagErr
                ? dict?.Story_tag_error_placeholder
                : dict?.Story_writer_label
            }
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
            placeholder={
              singerTagErr
                ? dict?.Story_tag_error_placeholder
                : dict?.Story_singer_label
            }
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
            options={TAG_OPTIONS}
            onChange={addMoodTags}
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
          />
          <div className="p-relative">
            {touched.description && errors.description && (
              <ErrorMsg error={errors.description} />
            )}
          </div>
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

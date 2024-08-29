"use client";
import React, { useEffect, useState } from "react";
import PageHeader from "../common/PageHeader";
import { useSelector } from "react-redux";
import StoryForm from "./StoryForm";

const NewStoryMain = () => {
  const dictSelector = useSelector(
    (store: any) => store.general.dictionary.StoriesPage
  );

  const [dict, setDict] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  return (
    <main>
      <PageHeader title="New_story_title" dict={dict} />
      <section className="bb-story__new-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <StoryForm dict={dict} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewStoryMain;

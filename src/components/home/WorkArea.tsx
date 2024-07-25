"use client";
import React from "react";
import WorkBgImg from "../../../public/assets/img/bg/main-bg.jpg";
import { TWorkFuture } from "@/types/types";
import { WORFEATURES } from "@/constants/constants";

type WorkAreaProps = {
  dict: { [key: string]: string } | null;
};
const WorkArea = ({ dict }: WorkAreaProps) => {
  return (
    <section
      className="bb-work__area include__bg"
      style={{ backgroundImage: `url(${WorkBgImg.src})` }}
    >
      <div className="container">
        <div className="row align-items-center bdFadeUp">
          <div className="col-xl-12">
            <div className="bb-work__content-space">
              <div className="section__title-wrapper bd-title-anim">
                <span className="section__subtitle">
                  {dict?.How_it_works_section_title}
                </span>
                <h2 className="section__title two">
                  {dict?.How_it_works_section_description_1}
                  <span className="animated-underline active">
                    {dict?.How_it_works_section_description_2}
                  </span>
                </h2>
              </div>
              <div className="bb-work__features-inner row">
                <div className="col-12">
                  <div className="row">
                    {WORFEATURES.map((item: TWorkFuture, i: number) => (
                      <div
                        className="bb-work__features-item col-lg-4 col-sm-12"
                        key={item.id}
                      >
                        <div className="bb-work__features-item-icon">
                          <span>{i + 1}</span>
                        </div>
                        <div className="bb-work__features-content">
                          <h4>{dict?.[item.title]}</h4>
                          <p>{dict?.[item.description]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkArea;

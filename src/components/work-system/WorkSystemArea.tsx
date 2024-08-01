"use client";
import React from "react";
import { WORFEATURES } from "../../constants/constants";

type WorkSystemAreaProps = { dict: { [key: string]: string } | null };
const WorkSystemArea = ({ dict }: WorkSystemAreaProps) => {
  return (
    <section className="bb-work-system__area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              {WORFEATURES.map((item: any, i: number) => (
                <div
                  className={`bb-work-system__item col-sm-12 col-lg-4`}
                  key={item.id}
                >
                  <div className="bb-work-system__item-inner">
                    <div className="bb-work-system__item-icon">
                      <span>{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="bb-work-system__item-title">
                        {dict?.[item.title] ?? item.title}
                      </h4>
                      <p className="bb-work-system__item-text">
                        {dict?.[item.description] ?? item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSystemArea;

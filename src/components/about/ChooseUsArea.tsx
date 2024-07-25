import { fetchChooseUsData } from "@/services/about";
import { ChooseUsDataType } from "@/types/types";
import React, { useEffect, useState } from "react";

const ChooseUsArea = ({ dict }: { dict: any }) => {
  const [chooseData, setChooseData] = useState<ChooseUsDataType[]>([]);

  useEffect(() => {
    fetchChooseUsData().then((res) => {
      if (res.ResponseCode == 200) {
        setChooseData(res.ResponseData);
      }
    });
  }, []);

  return (
    <div className="bb-choose__area">
      <div className="container">
        <div className="row align-items-end bdFadeUp">
          <div className="col-12">
            <h2 className="section__title bd-title-anim">
              {dict?.Why_choose_us_title}
            </h2>
            <p className="section__text">{dict?.Why_choose_us_text}</p>
          </div>
        </div>
        <div className="row bdFadeUp">
          {chooseData.map((item: ChooseUsDataType) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="bb-choose__item">
                <div className="d-flex align-items-center">
                  <div className="bb-choose__item-icon d-inline-block p-relative">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="bb-choose__item-title">
                    {dict?.[item.title]}
                  </h3>
                </div>
                <h3 className="bb-choose__item-text">{dict?.[item.text]}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUsArea;

import { fetchFaqData } from "@/services/about";
import { FaqItemType } from "@/types/types";
import React, { useEffect, useState } from "react";
import AccordionItem from "../common/AccordionItem";

const FaqArea = ({ dict }: { dict: any }) => {
  const [faqData, setFaqData] = useState<FaqItemType[]>([]);

  useEffect(() => {
    fetchFaqData().then((res) => {
      if (res.ResponseCode == 200) {
        setFaqData(res.ResponseData);
      }
    });
  }, []);

  return (
    <section className="fix bb-choose__faqArea">
      <div className="container">
        <div className="row align-items-center bdFadeUp">
          <div className="col-xl-7 col-lg-10">
            <h2 className="section__title mb-40 bd-title-anim">
              {dict?.Faq_area_title}
            </h2>
            <p className="section__description">{dict?.Faq_area_text}</p>
          </div>
        </div>
        <div className="row bdFadeUp">
          <div className="col-12">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade">
                <div className="accordion p-relative" id="accordionExample">
                  <div>
                    {faqData
                      .slice(0, Math.floor(faqData.length / 2))
                      .map((item: FaqItemType) => {
                        return (
                          <AccordionItem
                            key={item.id}
                            dict={dict}
                            id={item.id}
                            collapse_id={item.collapse_id}
                            item={item.question}
                            content={item.answer}
                          />
                        );
                      })}
                  </div>
                  <div>
                    {faqData
                      .slice(Math.floor(faqData.length / 2))
                      .map((item: FaqItemType) => {
                        return (
                          <AccordionItem
                            key={item.id}
                            dict={dict}
                            id={item.id}
                            collapse_id={item.collapse_id}
                            item={item.question}
                            content={item.answer}
                          />
                        );
                      })}
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

export default FaqArea;

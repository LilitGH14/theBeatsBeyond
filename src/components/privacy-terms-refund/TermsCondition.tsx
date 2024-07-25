import React from "react";

type TermsConditionProps = {
  dict: { [key: string]: string | { [key: string]: string } };
};
const TermsCondition = ({ dict }: TermsConditionProps) => {
  return (
    <div className="terms_conditions_content">
      <h2 className="warpper_title mb-25">{dict?.Terms_title1 as string}</h2>
      <p>{dict?.Terms_description1 as string}</p>
      <h3 className="info_title">{dict?.Terms_title2 as string}</h3>
      <ul className="icon_list unordered_list_block">
        <li>
          <span className="list_item_icon">
            <i className="fas fa-circle"></i>
          </span>
          <span className="list_item_text">
            <strong className="musicly_list_item">
              {
                (dict?.Terms_description2 as { [key: string]: string })
                  ?.list_item1
              }
            </strong>
            {
              (dict?.Terms_description2 as { [key: string]: string })
                ?.list_item1_dec
            }
          </span>
        </li>
        <li>
          <span className="list_item_icon">
            <i className="fas fa-circle"></i>
          </span>
          <span className="list_item_text">
            <strong className="musicly_list_item">
              {
                (dict?.Terms_description2 as { [key: string]: string })
                  ?.list_item2
              }
            </strong>
            {
              (dict?.Terms_description2 as { [key: string]: string })
                ?.list_item2_dec
            }
          </span>
        </li>
      </ul>
    </div>
  );
};

export default TermsCondition;

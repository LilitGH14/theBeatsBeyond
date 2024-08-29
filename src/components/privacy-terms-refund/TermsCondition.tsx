import React from "react";

type TermsConditionProps = {
  dict: { [key: string]: string | { [key: string]: string } };
};
const TermsCondition = ({ dict }: TermsConditionProps) => {
  return (
    <div className="terms_conditions_content">
      <h2 className="warpper_title">{dict?.Terms_title1 as string}</h2>
      <div dangerouslySetInnerHTML={{ __html: dict?.TermsAndConditionsContent }} />
    </div>
  );
};

export default TermsCondition;

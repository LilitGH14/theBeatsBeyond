import React from "react";

type PrivacyPolicyProps = {
  dict: { [key: string]: string | { [key: string]: string } };
};
const PrivacyPolicy = ({ dict }: PrivacyPolicyProps) => {
  return (
    <div className="terms_conditions_content">
      <h2 className="warpper_title">{dict?.Privacy_Policy_title1 as string}</h2>
      <div dangerouslySetInnerHTML={{ __html: dict?.PrivacyPolicyContent }} />
    </div>
  );
};

export default PrivacyPolicy;

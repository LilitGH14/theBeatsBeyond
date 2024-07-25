import Breadcrumb from "@/components/common/Breadcrumb";
import PrivacyTermsAndRefund from "@/components/privacy-terms-refund/PrivacyTermsAndRefund";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <Breadcrumb title="Privacy & Policy" />
      <PrivacyTermsAndRefund policyActive="active" />
    </Wrapper>
  );
};

export default page;

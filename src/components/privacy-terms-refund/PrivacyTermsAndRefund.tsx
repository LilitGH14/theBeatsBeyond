"use client";
import React, { useEffect, useState } from "react";
import TermsCondition from "./TermsCondition";
import PrivacyPolicy from "./PrivacyPolicy";
import { useSelector } from "react-redux";

type TPrivacyTermsRefundProps = {
  termsActive?: string;
  policyActive?: string;
};
const PrivacyTermsAndRefund = ({
  termsActive,
  policyActive,
}: TPrivacyTermsRefundProps) => {
  const dictSelector = useSelector(
    (store: any) => store.general.dictionary.PrivacyTermsPage
  );

  const [dict, setDict] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  return (
    <section className="terms_conditions_section section_space_lg pt-30 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <ul
              className="nav tabs_nav_boxed unordered_list_block mb-60"
              role="tablist"
            >
              <li role="presentation">
                <button
                  className={policyActive ? policyActive : ""}
                  data-bs-toggle="tab"
                  data-bs-target="#tab_privacy_policy"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <i className="fas fa-circle"></i>
                  <span>{dict?.Privacy_Policy}</span>
                </button>
              </li>
              <li role="presentation">
                <button
                  className={termsActive ? termsActive : ""}
                  data-bs-toggle="tab"
                  data-bs-target="#tab_terms_conditions"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <i className="fas fa-circle"></i>
                  <span>{dict?.Terms_Conditions}</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="tab-content mb-60">
              <div
                className={`tab-pane fade show ${
                  policyActive ? policyActive : ""
                }`}
                id="tab_privacy_policy"
                role="tabpanel"
              >
                <PrivacyPolicy dict={dict} />
              </div>
              <div
                className={`tab-pane fade show ${
                  termsActive ? termsActive : ""
                }`}
                id="tab_terms_conditions"
                role="tabpanel"
              >
                <TermsCondition dict={dict} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyTermsAndRefund;

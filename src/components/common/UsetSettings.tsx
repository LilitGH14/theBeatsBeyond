"use client";
import React from "react";
import Payments from "./Payments";
import TermsCondition from "../privacy-terms-refund/TermsCondition";
import PrivacyPolicy from "../privacy-terms-refund/PrivacyPolicy";

type UserSettingsProps = {
  dict: { [key: string]: string } | any;
};
const UserSettings = ({ dict }: UserSettingsProps) => {
  return (
    <section className="terms_conditions_section">
      <div className="row">
        <div className="col-lg-3">
          <ul
            className="nav tabs_nav_boxed unordered_list_block"
            role="tablist"
          >
            <li role="presentation">
              <button
                className="active"
                data-bs-toggle="tab"
                data-bs-target="#tab_personal_info"
                type="button"
                role="tab"
                aria-selected="true"
              >
                <i className="fas fa-circle"></i>
                <span>{dict?.UserSettings?.Personal_info}</span>
              </button>
            </li>
            <li role="presentation">
              <button
                data-bs-toggle="tab"
                data-bs-target="#tab_payments"
                type="button"
                role="tab"
                aria-selected="false"
              >
                <i className="fas fa-circle"></i>
                <span>{dict?.UserSettings?.Payments}</span>
              </button>
            </li>
            <li role="presentation">
              <button
                data-bs-toggle="tab"
                data-bs-target="#tab_privacy_policy"
                type="button"
                role="tab"
                aria-selected="false"
              >
                <i className="fas fa-circle"></i>
                <span>{dict?.UserSettings?.Privacy_policy}</span>
              </button>
            </li>
            <li role="presentation">
              <button
                data-bs-toggle="tab"
                data-bs-target="#tab_terms_conditions"
                type="button"
                role="tab"
                aria-selected="false"
              >
                <i className="fas fa-circle"></i>
                <span>{dict?.UserSettings?.Terms_and_conditions}</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="col-lg-9">
          <div className="tab-content">
            <div
              className={`tab-pane fade show active`}
              id="tab_personal_info"
              role="tabpanel"
            >
              ...
            </div>
            <div
              className={`tab-pane fade show`}
              id="tab_payments"
              role="tabpanel"
            >
              <Payments dict={dict?.UserSettings} />
            </div>
            <div
              className={`tab-pane fade show`}
              id="tab_privacy_policy"
              role="tabpanel"
            >
              <PrivacyPolicy dict={dict?.PrivacyTermsPage} />
            </div>
            <div
              className={`tab-pane fade show`}
              id="tab_terms_conditions"
              role="tabpanel"
            >
              <TermsCondition dict={dict?.PrivacyTermsPage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSettings;

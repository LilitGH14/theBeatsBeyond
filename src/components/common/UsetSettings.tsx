"use client";
import React from "react";
import Payments from "./Payments";

type UserSettingsProps = {
  termsActive?: string;
  policyActive?: string;
  dict: { [key: string]: string };
};
const UserSettings = ({
  termsActive,
  policyActive,
  dict,
}: UserSettingsProps) => {
  return (
    <section className="terms_conditions_section section_space_lg pt-20 pb-20">
      <div className="row">
        <div className="col-xl-2 col-lg-4">
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
                <span>{dict?.Personal_info}</span>
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
                <span>{dict?.Payments}</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="col-xl-10 col-lg-8">
          <div className="tab-content mb-60">
            <div
              className={`tab-pane fade show ${
                policyActive ? policyActive : ""
              }`}
              id="tab_privacy_policy"
              role="tabpanel"
            >
              Personal info
            </div>
            <div
              className={`tab-pane fade show ${termsActive ? termsActive : ""}`}
              id="tab_terms_conditions"
              role="tabpanel"
            >
              <Payments dict={dict} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSettings;

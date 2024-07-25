"use client";
import { useEffect, useState } from "react";
import Breadcrumb from "../common/Breadcrumb";
import { useSelector } from "react-redux";
import ContactForm from "./ContactForm";

const ContactMainArea = () => {
  const dictSelector = useSelector(
    (store: any) => store.general.dictionary.ContactPage
  );

  const [dict, setDict] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  return (
    <>
      <Breadcrumb title="Contact Us" />
      <section className="bb-contact__area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bb-contact__wrapper ms-contact-space ms-bg-2">
                <ContactForm dict={dict} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMainArea;

"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ContactForm from "./ContactForm";
import PageHeader from "../common/PageHeader";
import Bg from "../../../public/assets/img/event/event-bg-4.jpg";

const ContactMainArea = () => {
  const dictSelector = useSelector(
    (store: any) => store.general.dictionary.ContactPage
  );

  const [dict, setDict] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  return (
    <main>
      <PageHeader dict={dict} imageSrc={Bg.src} title="Contact Us" />
      <section className="bb-contact__area">
        <ContactForm dict={dict} />
      </section>
    </main>
  );
};

export default ContactMainArea;

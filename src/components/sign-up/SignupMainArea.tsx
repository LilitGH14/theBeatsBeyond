"use client";
import React, { useEffect, useState } from "react";
import RegisterForm from "./RegisterForm";
import { useSelector } from "react-redux";

const SignupMainArea = () => {
  const dictSelector = useSelector(
    (store: any) => store.general.dictionary?.Registration
  );

  const [dict, setDict] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  return (
    <main>
      <section className="bb-auth__area">
        <div className="bb-auth__inner">
          <h3 className="bb-auth__title">{dict?.Signup_description}</h3>
          <RegisterForm dict={dict} />
        </div>
      </section>
    </main>
  );
};

export default SignupMainArea;

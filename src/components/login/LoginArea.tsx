"use client";
import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";

const LoginArea = () => {
  const dictSelector = useSelector(
    (store: any) => store.general.dictionary?.Login
  );

  const [dict, setDict] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  return (
    <main>
      <section className="bb-auth__area">
        <div className="bb-auth__inner">
          <h3 className="bb-auth__title">{dict?.Login_description}</h3>
          <LoginForm dict={dict} />
        </div>
      </section>
    </main>
  );
};

export default LoginArea;

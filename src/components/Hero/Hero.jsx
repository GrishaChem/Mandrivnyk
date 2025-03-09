import React from "react";
import s from "./Hero.module.css";
import clsx from "clsx";
const Hero = () => {
  return (
    <>
      <div className={s.container}>
        <h2 className={s.header2}>
          СПАЛЬНІ МІШКИ
          <hr className={s.line} />
        </h2>
        <h1 className={clsx(s.header2, s.header1)}>
          <span className={s.span}>Л І Ж К О</span> <span>М Р І Ї</span>
        </h1>
        <h2 className={clsx(s.header2, s.degenerat)}>ОБЕРИ СПАЛЬНИЙ МІШОК </h2>
      </div>
    </>
  );
};

export default Hero;

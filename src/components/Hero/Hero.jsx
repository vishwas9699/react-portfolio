import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vishwas</h1>
        <p className={styles.description}>
        I'm a full-stack developer with 3 years of Experience with Angular,React and NodeJS. 
        Reach out if you'd like to learn more!
        </p>
        <a href="mailto:vvishwas179@gmail.com" className={styles.contactBtn}>
          Contact Me 
        </a>
        <a href="https://docs.google.com/document/d/1WTivfBtZgLVy0c5f3QqdkMDvuEc0Gv0l/edit?usp=sharing&ouid=105349023939445786789&rtpof=true&sd=true" className={styles.resumeBtn}>
          View My CV
        </a>
        
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

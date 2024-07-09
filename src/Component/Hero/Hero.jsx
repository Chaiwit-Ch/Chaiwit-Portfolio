import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation'

import styles from "./Hero.module.css"

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hi it's me</p>
            <h3 className={styles.text_2}>Chaiwit Chowchainit</h3>
            <p className={styles.text_3}>
              <span>I'm a </span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Embedded ... ?',
                  500, // wait 1s before replacing "Mice" with "Hamsters"
                  'Web Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>
            I have 4 years of experience in embedded firmware and now I'm looking for a new role as a Web developer.
            </p>
            <ul className={styles.hero_social}>
              <li><a href="https://github.com/Chaiwit-Ch" target="_blank"><FaGithub /></a></li>
              <li><a href="https://th.linkedin.com/in/chaiwit-chowchainit-989937245" target="_blank"><FaLinkedinIn /></a></li>
            </ul>
          </div>
          <div >
            <div className={styles.hero_img}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

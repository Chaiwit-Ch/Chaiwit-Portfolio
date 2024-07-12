import React from 'react'
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { FaMicrochip, FaFileCode, FaReact, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa6'
import { SiVisualbasic } from "react-icons/si";

import styles from './Skill.module.css'

function Skill() {
  return (
    <div className={styles.skills_con}>
        <h2 className={styles.skills_title}><FaFileCode/> Programming Skill</h2>
        <div className={styles.skills_list}>
            <div className={styles.skills_item}>
                <FaMicrochip/> 
                <p>Embedded C</p>
            </div>
            <div className={styles.skills_item}>
                <TbBrandCpp/>
            </div>
            <div className={styles.skills_item}>
                <TbBrandCSharp/>
            </div>
            <div className={styles.skills_item}>
                <SiVisualbasic/>
            </div>
            <div className={styles.skills_item}>
                <FaHtml5/>
            </div>
            <div className={styles.skills_item}>
                <FaCss3Alt/>
            </div>
            <div className={styles.skills_item}>
                <FaReact/>
            </div>
            <div className={styles.skills_item}>
                <FaPython/>
            </div>
        </div>
    </div>
  )
}

export default Skill

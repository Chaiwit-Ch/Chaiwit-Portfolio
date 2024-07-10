import React from 'react'
import { PiStudentFill } from "react-icons/pi";

import styles from './Education.module.css'

function Education() {
  return (
    <div className={styles.education_con}>
      <h2 className={styles.education_title}> <PiStudentFill/> Education</h2>
      <div className={styles.education_list}>
        <div className={styles.education_item}>
            <h3>Computer Engineering and Informatics</h3>
            <h4>Kasetsart University 2013-2017</h4>
            <h5>Achievement</h5>
            <ul>
                <li>The 2015 ACM-ICPC Asia Thailand National On-site Programming Contest</li>
                <li>The 2016 ACM-ICPC Asia Thailand National On-site Programming Contest</li>
            </ul>
            <h5>Project</h5>
            <p>Wireless Sensor network for Home Security</p>
            <ul>
                <li>Use IR Sensor for detect intruder</li>
                <li>If intruder not have authentication device, notification to application in mobile phone.</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Education

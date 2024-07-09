import React from 'react'
import { MdWork } from "react-icons/md";

import styles from './WorkExperience.module.css'

function WorkExperience() {
  return (
    <div className={styles.workExp_con}>
      <h2 className={styles.workExp_title}> <MdWork/> Work Experience</h2>
      <div className={styles.workExp_list}>
        <div className={styles.workExp_item}>
            <h3>R V CONNEX CO.,LTD. (2017-2019)</h3>
            <h4>Junior Embedded Engineer</h4>
            <ul>
                <li>Develop communication function of Flight Control computer</li>
                <li>Develop Flight Control computer Unit test</li>
                <li>Debug and Support Firmware in field test</li>
                <li>Research and test new sensor protocol for UAV</li>
                <li>Develop Test application for new sensor</li>
                <li>Develop firmware for microcontroller stm32 </li>
                <li>Meet and get requirements from customer</li>
            </ul>
        </div>
        <div className={styles.workExp_item}>
            <h3>Delta Electronics (2022 - Now)</h3>
            <h4>Embedded Firmware Engineer</h4>
            <ul>
                <li>Power Supply Debugger (GUI C# Application for read power supply report with I2C)</li>
                <li>LED Tester (Read LED status with ADC module and count frequency then report to UART Communication )</li> 
                <li>Bootloader function (upgrade firmware application via serial communication)  </li>
                <li>PSU blackbox</li>
                <li>Test and Calibration PSU current display</li>
                <li>Smart On function</li>
                <li>Research PMBus protocol for M-CRPS standard</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience

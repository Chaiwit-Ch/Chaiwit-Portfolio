import React from 'react'
import {FaPhone, FaEnvelope } from 'react-icons/fa6'
import styles from './Contract.module.css'

function Contract() {
  return (
    <div className={styles.contract_con}>
        <div className={styles.contract_info}>
            <h3 className={styles.contact_title}>Contract Me!</h3>
            <p> If you are interested me for a development role or have any questions, please feel free to contact me.</p>
            <p> <FaPhone/> (+66) 854009959</p>
            <p> <FaEnvelope/> chaiwitchowchainit@gmail.com</p>
        </div>
    </div>
  )
}

export default Contract

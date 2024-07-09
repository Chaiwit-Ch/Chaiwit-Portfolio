import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa6'

import styles from "./Navbar.module.css"

function Navbar(props) {
    const [burgerFlag, setBurgerFlag] = useState(false);
    
    function toggleBurger() {
        setBurgerFlag(!burgerFlag);
    }

    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.nav_con}>
                    <div className={styles.logo}>
                        <a href="#">Chaiwit CV</a>
                    </div>
                    <ul>
                        <li><a href="#" onClick={props.goToEdu}>Education</a></li>
                        <li><a href="#" onClick={props.goToWork}>Work Experience</a></li>
                        <li><a href="#" onClick={props.goToSkill}>Skill</a></li>
                        <li><a href="#" onClick={props.goToContract}>Contract</a></li>
                    </ul>
                </div>
                {/* Mobile Menu */}
                <FaBars className={styles.bars} onClick={toggleBurger}/>
                { burgerFlag ? (
                    <>
                        <ul className={styles.nav_mobile}>
                            <li><a href="#" onClick={props.goToEdu}>Education</a></li>
                            <li><a href="#" onClick={props.goToWork}>Work Experience</a></li>
                            <li><a href="#" onClick={props.goToSkill}>Skill</a></li>
                            <li><a href="#" onClick={props.goToContract}>Contract</a></li>
                        </ul>
                    </>
                ) : null}
            </div>
        </nav>
    )
}

export default Navbar

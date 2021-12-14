import React from 'react'
import styles from '../styles/Footer.module.scss';

import { Linkedin, GitHub } from 'react-feather';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.section}>
                <h3>Contacts</h3>
                <p>vitalijus.alsauskas@gmail.com</p>
            </div>
            <div className={styles.section}>
                <h3>Pizza House</h3>
                <p>@ By Vitalijus Alšauskas</p>
            </div>
            <div className={styles.section}>
                <h3>Links</h3>
                <button className={styles.footer_button} onClick={() => window.open('https://www.linkedin.com/in/vitalijus-al%C5%A1auskas-95b49020b/','_blank')}> 
                    <Linkedin strokeWidth={1} />
                    <p>LinkedIn</p>
                </button>
                <button className={styles.footer_button} onClick={() => window.open('https://github.com/Vitals9367','_blank')}>
                    <GitHub strokeWidth={1} />
                    <p>GitHub</p>
                </button>
            </div>
        </div>
    )
}

export default Footer
 
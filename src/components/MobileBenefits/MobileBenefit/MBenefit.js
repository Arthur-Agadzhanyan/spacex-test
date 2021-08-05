import React from 'react';
import styles from "./mbenefit.module.scss"

const MBenefit = ({ topText, title, bottomText }) => {
    return (
        <div className={styles.benefit}>
                <p className={styles.benefit__text}>{topText}</p>
                <h2 className={styles.benefit__title}>{title}</h2>
                <p className={styles.benefit__text}>{bottomText}</p>
        </div>
    );
}

export default MBenefit;

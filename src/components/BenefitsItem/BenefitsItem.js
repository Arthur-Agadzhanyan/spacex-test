import React from 'react';
import styles from "./benefit.module.scss"

const BenefitsItem = ({ topText, title, bottomText, corner }) => {

    const hover = (e) => {
        let bounds = e.target.getBoundingClientRect()
        var x = Math.floor(e.clientX - bounds.left);
        var y = Math.floor(e.clientY - bounds.top);

        e.target.style.setProperty('--x', `${ x }px`)
	    e.target.style.setProperty('--y', `${ y }px`)
    }

    return (
        <>
            <div className={styles.benefits__item}>
                <div className={styles.hoverField} onMouseMove={hover} style={{background: `linear-gradient(${corner}deg,transparent 30%,rgba(39,45,53,.3))`}}></div>
                <p className={styles.item__text}>{topText}</p>
                <h2 className={styles.item__title}>{title}</h2>
                <p className={styles.item__text}>{bottomText}</p>
            </div>
        </>
    );
}

export default BenefitsItem;

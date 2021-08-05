import React from 'react';
import styles from "./button.module.scss"

const Button = ({children,margin,...attr}) => {
    return (
        <button className={styles.button} style={{margin}} {...attr}>{children}</button>
    );
}

export default Button;

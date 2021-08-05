import React from 'react';
import Button from '../Button/Button';
import styles from "./intro.module.scss"
import missile from "../../assets/images/missile.png"
import Benefits from '../Benefits/Benefits';

const Intro = () => {

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={`${styles.title}`}>
                    <span className={`${styles.title__text}`}>ПУТЕШЕСТВИЕ</span>
                </h1>
                <h2 className={`${styles.subtitle}`}>
                    <span className={`${styles.title__text}`}>на красную планету</span>
                </h2>
                
                <Button id="button" margin="85px 0px 37px 0px">Начать путешествие</Button>
            </div>
            <div className={styles.missileContainer}>
                <img id="missile" className={styles.missile} src={missile} alt="missile"/>
            </div>

            <Benefits />
        </div>
    );
}

export default Intro;

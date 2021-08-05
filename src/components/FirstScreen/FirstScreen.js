import React from 'react';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import styles from "./first-screen.module.scss"

const FirstScreen = () => {
    return (
        <section className={styles.first_screen}>
            <Header/>
            <Intro/>
        </section>
    );
}

export default FirstScreen;

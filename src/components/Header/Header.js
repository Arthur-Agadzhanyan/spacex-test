import React, { useState } from 'react';
import styles from "./header.module.scss"
import logo from '../../assets/images/logo.png'

const Menu = () => {
    const [navActive, setNavActive] = useState(false);
    const links = [
        { text: "Главная", href: "#" },
        { text: "Технология", href: "#" },
        { text: "График полетов", href: "#" },
        { text: "О компании", href: "#" },
        { text: "Контакты", href: "#" }
    ]

    const openMobileNavbar = () => {
        setNavActive(true)
    }
    const closeMobileNavbar = () => {
        setNavActive(false)
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.company_brand}>
                    <div className={styles.brand}></div>
                    <img className={styles.brand__image} src={logo} alt="spaceX logo"/>
                </div>

                <nav className={`${styles.nav} ${navActive ? styles.active : ""}`}>
                    <span id='close_menu' className={styles.close_menu} onClick={closeMobileNavbar}>×</span>
                    {links.map((link, id) => (
                        <a key={`${link}_${id}`} className={styles.nav__link} href={link.href} onClick={closeMobileNavbar}>{link.text}</a>
                    ))}
                </nav>
                <div id="bar" className={styles.bar}><i className="fas fa-bars" onClick={openMobileNavbar}></i></div>
            </div>
        </header>
    );
}

export default Menu;

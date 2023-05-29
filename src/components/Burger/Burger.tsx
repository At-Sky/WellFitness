import React, {useState} from 'react';
import styles from './Burger.module.scss'

interface IBurgerProps {
    isMenuOpened: boolean;
    setIsMenuOpened: (el: boolean) => void;
}

function Burger({isMenuOpened, setIsMenuOpened}: IBurgerProps) {

    return (
        <div className={styles.burger} onClick={() => setIsMenuOpened(!isMenuOpened)}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </div>
    );
}

export default Burger;

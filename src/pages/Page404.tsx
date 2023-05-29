import React from 'react';
import styles from '@styles/Page404.module.scss'
import {Link} from "react-router-dom";

function Page404() {
    return (
        <section className={styles.nfpage}>
            <h1 className={styles.nfpage__title}>Извините, но мы не нашли эту страницу</h1>
            <button className={styles.nfpage__button}><Link to={'/'}>Вернуться на главную</Link></button>
        </section>
    );
}

export default Page404;

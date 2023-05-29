import React from 'react';
import styles from './MainPage.module.scss'

interface IMainPageProps {

}

function MainPage(props: IMainPageProps) {
    return (
        <div className={styles.page}>Main</div>
    );
}

export default MainPage;



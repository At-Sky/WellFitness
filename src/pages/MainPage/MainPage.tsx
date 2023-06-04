import React from 'react';
import styles from './MainPage.module.scss'
import Slider from "@components/Slider/Slider.tsx";

interface IMainPageProps {

}

function MainPage(props: IMainPageProps) {
    return (
        <div className={styles.page}>
            <div className={styles.page__slider_container}>
                <Slider/>
            </div>
        </div>
    );
}

export default MainPage;



import React from 'react';
import styles from './MenuContent.module.scss'

interface IMenuContent {
    isModalOpened: boolean;
}

function MenuContent({isModalOpened}: IMenuContent) {
    return (
        <div className={isModalOpened ? styles.modal : styles.modal + ' ' + styles.modal_hidden}>
            {/*TODO: хуйню которая в сером меню в самом начале сюда верстать*/}
        </div>
    );
}

export default MenuContent;

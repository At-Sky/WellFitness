import React, {useEffect, useState} from 'react';
import styles from "@styles/Modal.module.scss";

interface IModal {
    isOverlayHidden?: boolean;
    isModalOpened: boolean;
    setIsModalOpened: (el: boolean) => void;
    children: string | JSX.Element | JSX.Element[]
}

function Modal({isModalOpened, setIsModalOpened, children, isOverlayHidden}: IModal) {

    const configureStyle = () => {
        if (isOverlayHidden) {
            return isModalOpened ? styles.overlay + ' ' + styles.overlay_inherit: styles.overlay + ' ' + styles.overlay_hidden  + ' ' + styles.overlay_inherit
        }

        return isModalOpened ? styles.overlay : styles.overlay + ' ' + styles.overlay_hidden
    }

    return (
        <>
            <div
                className={configureStyle()}
                onClick={() => setIsModalOpened(!isModalOpened)}>
            </div>
            {children}
        </>
    );
}

export default Modal;

import React, {useEffect, useState} from 'react';
import styles from "./Modal.module.scss";
import {createPortal} from "react-dom";

interface IModal {
    isPopUp?: boolean
    isOverlayHidden?: boolean;
    isModalOpened: boolean;
    setIsModalOpened: (el: boolean) => void;
    children: string | JSX.Element | JSX.Element[]
}

function Modal({isModalOpened, setIsModalOpened, children, isOverlayHidden, isPopUp}: IModal) {
    const portal = document.getElementById("modal-portal")

    const configureStyle = () => {
        if (isOverlayHidden) {
            return isModalOpened ? styles.overlay + ' ' + styles.overlay_inherit : styles.overlay + ' ' + styles.overlay_hidden + ' ' + styles.overlay_inherit
        }

        return isModalOpened ? styles.overlay : styles.overlay + ' ' + styles.overlay_hidden
    }

    return isPopUp ?
        <>
            <div
                className={configureStyle()}
                onClick={() => setIsModalOpened(!isModalOpened)}>
            </div>
            {children}
        </>
        : createPortal(
            <>
                <div
                    className={configureStyle()}
                    onClick={() => setIsModalOpened(!isModalOpened)}>
                </div>
                {children}
            </>,
            portal
        );
}

export default Modal;

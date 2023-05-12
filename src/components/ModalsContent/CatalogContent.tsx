import React from 'react';
import styles from "@styles/ModalsContent/CatalogContent.module.scss";
import close from "@assets/icons/close.svg";
import {useQuery} from "@apollo/client";
import {ALL_CATEGORIES} from "@src/apollo/requests/getCategories.ts";
import type { ICategory } from "@src/apollo/DbInterfaces.ts";

interface ICatalogContent {
    isModalOpened: boolean;
    setIsModalOpened: (el: boolean) => void;
}

function CatalogContent({isModalOpened, setIsModalOpened}: ICatalogContent) {
    const { loading, error, data} = useQuery(ALL_CATEGORIES)

    return (
        <>
            <div
                className={isModalOpened ? styles.catalog_overlay : styles.catalog_overlay + ' ' + styles.catalog_overlay_hidden}
                onClick={() => setIsModalOpened(!isModalOpened)}
            />
            <div className={isModalOpened ? styles.modal : styles.modal + ' ' + styles.modal_hidden}>
                <button className={styles.close_button} onClick={() => setIsModalOpened(!isModalOpened)}>
                    <img src={close} alt={'close'}/>
                </button>
                <header className={styles.header}>
                    {/*{data.allCategories.map((item: ICategory) => <button key={item.id}>item.name</button>)}*/}
                </header>
                <nav>
                    <a>Кардиотренажеры</a>
                    <a>Силовые тренажеры</a>
                    <a>Уличные виды спорта</a>
                    <a>Свободные веса</a>
                    <a>Игровые столы</a>
                    <a>Массажное оборудование</a>
                    <a>Фитнес аксессуары</a>
                    <a>Функциональный тренинг</a>
                </nav>
            </div>
        </>
    );
}

export default CatalogContent;

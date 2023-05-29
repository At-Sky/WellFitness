import React, {useEffect, useState} from 'react';
import styles from "./CatalogContent.module.scss";
import close from "@assets/icons/close.svg";
import {useQuery} from "@apollo/client";
import {ALL_CATEGORIES} from "@src/apollo/requests/getCategories.ts";
import SubCategoriesList from "@components/ModalsContent/CatalogInMenu/SubCategoriesList/SubCategoriesList.tsx";
import SmallCategoriesContainer from "@components/ModalsContent/CatalogInMenu/SmallCategories/SmallCategoriesContainer/SmallCategoriesContainer.tsx";

interface ICatalogContent {
    isModalOpened: boolean;
    setIsModalOpened: (el: boolean) => void;
}

function CatalogContent({isModalOpened, setIsModalOpened}: ICatalogContent) {
    const { loading, error, data: categories} = useQuery(ALL_CATEGORIES)
    const [currentTitleId, setCurrentTitleId] = useState(1);
    const [currentSubId, setCurrentSubId] = useState(1);
    const [currentSmallCategory, setCurrentSmallCategory] = useState<[] | ISmallCategory[]>([])

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
                    {!loading && categories.allCategories.map((item: ICategory) => {
                        return <button
                            className={
                                item.id == currentTitleId ?
                                    styles.header__button + ' ' + styles.header__button_active
                                    : styles.header__button
                            }
                            onClick={() => {
                                setCurrentTitleId(item.id)
                            }}
                            key={item.id}
                        >
                            {item.name}
                        </button>
                    })}
                </header>
                <div className={styles.container}>
                    {!loading && categories.allCategories.map((item: ICategory) => {
                        return <SubCategoriesList
                            key={item.id}
                            parentId={item.id}
                            currentTitleId={currentTitleId}
                            categories={item.subCategories}
                            setCurrentSmallCategory={setCurrentSmallCategory}
                        />
                    })}
                    <SmallCategoriesContainer smallCategories={currentSmallCategory}/>
                </div>
            </div>
        </>
    );
}

export default CatalogContent;

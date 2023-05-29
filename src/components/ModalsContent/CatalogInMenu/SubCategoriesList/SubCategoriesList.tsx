import React, { useState } from 'react';
import styles from './SubCategoriesList.module.scss'
import arrow from '@assets/icons/arrow.svg'

interface ISubCategoriesListProps {
    parentId: number;
    currentTitleId: number;
    categories: ISubCategory[];
    setCurrentSmallCategory: React.Dispatch<React.SetStateAction<[] | ISmallCategory[]>>;
}

function SubCategoriesList({parentId, currentTitleId, categories, setCurrentSmallCategory}: ISubCategoriesListProps) {
    const [currentSmallCategoryId, setCurrentSmallCategoryId] = useState(1);

    const handleCategoryClick = (id: number, smallCategories: ISmallCategory[]) => {
        setCurrentSmallCategoryId(id)
        setCurrentSmallCategory(smallCategories)
    }

    return (
        <nav className={currentTitleId == parentId ? styles.list : styles.list + ' ' + styles.list_hidden}>
            {categories.map(el => <a
                key={el.id}
                className={styles.list__category}
                onClick={() => handleCategoryClick(el.id, el.smallCategories)}
            >
                {el.name}
                <img src={arrow} alt={'arrow'}/>
            </a>)}
        </nav>
    );
}

export default SubCategoriesList;

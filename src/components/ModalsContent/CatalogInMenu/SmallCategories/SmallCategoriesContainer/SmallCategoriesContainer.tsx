import React from 'react';
import styles from './SmallCategoriesContainer.module.scss'
import SmallCategoryCard from "@components/ModalsContent/CatalogInMenu/SmallCategories/SmallCategoryCard/SmallCategoryCard.tsx";
import img from '@assets/images/trainer.png'

interface ISmallCategoriesContainerProps {
    smallCategories: ISmallCategory[];
}

function SmallCategoriesContainer({smallCategories}: ISmallCategoriesContainerProps) {
    return (
        <div className={styles.container}>
            {/*TODO: тут маленький костыль на картинку, хз как картинки сделать пока*/}
            {smallCategories.map(item => <SmallCategoryCard key={item.id} img={img} name={item.name}/>)}
        </div>
    );
}

export default SmallCategoriesContainer;

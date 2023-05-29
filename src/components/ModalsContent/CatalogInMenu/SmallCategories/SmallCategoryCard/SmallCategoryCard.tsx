import React from 'react';
import styles from './SmallCategoryCard.module.scss'

interface ISmallCategoryCardProps {
    img: string;
    name: string;
}

function SmallCategoryCard({img, name}: ISmallCategoryCardProps) {
    return (
        <div className={styles.card}>
            <img className={styles.card__image} src={img} alt={'category'}/>
            <a className={styles.card__name}>{name}</a>
        </div>
    );
}

export default SmallCategoryCard;

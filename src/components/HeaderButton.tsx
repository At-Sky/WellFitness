import React, {useState, useEffect} from 'react';
import style from '@styles/HeaderButton.module.scss';

interface IHeaderButtonProps {
    icon: string;
    styles: string;
    alt: string;
    width: number;
    height: number;
    amount: number;
}

function HeaderButton({icon, styles, alt, width, height, amount}: IHeaderButtonProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(amount)
    }, [amount]);


    return (
        <button className={styles + ' ' + style.button}>
            <img src={icon} alt={alt} width={width} height={height}/>
            <span className={style.counter}>{count}</span>
        </button>
    );
}

export default HeaderButton;

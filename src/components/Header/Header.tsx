import React, {useState, useEffect} from 'react';
import styles from './Header.module.scss';
import HeaderButton from "@components/Header/HeaderButton/HeaderButton.tsx";
import Modal from "@components/Modal/Modal.tsx";
import MenuContent from "@components/ModalsContent/MenuContent/MenuContent.tsx";
import Burger from "@components/Burger/Burger.tsx";
import {Link} from "react-router-dom";

//modals
import CallBackContent from "@components/ModalsContent/CallbackContent/CallbackContent.tsx";
import CatalogContent from "@components/ModalsContent/CatalogContent/CatalogContent.tsx";

import logo from '@assets/images/logo.svg';
import login from '@assets/icons/login.svg';
import cart from '@assets/icons/cart.svg';
import heart from '@assets/icons/heart.svg';
import match from '@assets/icons/match.svg';
import catalog from '@assets/icons/menu.svg';
import search from '@assets/icons/search.svg';
import triangleW from '@assets/images/triangleW.svg';
import {useResize} from "@src/hooks/useResize.ts";



interface IHeaderProps {

}

function Header(props: IHeaderProps) {
    const [isMobile, setIsMobile] = useState(false);
    const { width } = useResize();

    //modals
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [isCallbackFormOpened, setIsCallbackFormOpened] = useState(false);
    const [isCatalogOpened, setIsCatalogOpened] = useState(false);

    useEffect(() => {
        width <= 1750 ? setIsMobile(true) : setIsMobile(false)
    }, [width]);

    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <div className={styles.container_logo}>
                    <Link to={'/'}><img src={logo} alt={'logo'}/></Link>
                    <button className={styles.town}>Москва</button>
                </div>
                {
                    !isMobile &&
                    <div className={styles.container_info}>
                        <div className={styles.partnership}>
                            <a href="" className={styles.partnership__dealers}>Для диллеров</a>
                            <button className={styles.partnership__partners}>Become a Partner</button>
                        </div>
                        <span className={styles.divider}></span>
                        <div className={styles.phone}>
                            <a href="tel:+7 (800) 000-00-00" className={styles.phone__number}>+7 (800) 000-00-00</a>
                            <button className={styles.phone__town}>Мск</button>
                            <button className={styles.phone__call} onClick={() => setIsCallbackFormOpened(!isCallbackFormOpened)}>Заказать звонок</button>
                            <Modal isModalOpened={isCallbackFormOpened} setIsModalOpened={setIsCallbackFormOpened}>
                                <CallBackContent isModalOpened={isCallbackFormOpened} setIsModalOpened={setIsCallbackFormOpened}/>
                            </Modal>
                        </div>
                        <span className={styles.divider}></span>
                        <div className={styles.login}>
                            <button className={styles.login__button}>Войти</button>
                            <img src={login} alt="login" className={styles.login__icon}/>
                        </div>
                    </div>
                }
                {
                    isMobile &&
                    <div className={styles.mobile_container}>
                        <button className={styles.search_button}>
                            <img src={search} alt="search"/>
                        </button>
                        <div className={styles.divider + ' ' + styles.divider__first}></div>
                        <HeaderButton
                            icon={match} styles={styles.button + ' ' + styles.button__match}
                            alt={'match'} width={17} height={17} amount={10}
                        />
                        <HeaderButton
                            icon={heart} styles={styles.button + ' ' + styles.button__heart}
                            alt={'heart'} width={24} height={20} amount={15}
                        />
                        <HeaderButton
                            icon={cart} styles={styles.button + ' ' + styles.button__cart}
                            alt={'cart'} width={21} height={24.5} amount={1}
                        />
                        <Burger isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened}/>
                        <Modal isModalOpened={isMenuOpened} setIsModalOpened={setIsMenuOpened}>
                            <MenuContent isModalOpened={isMenuOpened}/>
                        </Modal>
                    </div>
                }
            </div>
            {
                !isMobile &&
                    <div className={styles.menu}>
                        <div className={styles.container_find}>
                            <button onClick={() => setIsCatalogOpened(!isCatalogOpened)} className={styles.catalog_button}>
                                <img src={catalog} alt="catalog"/>
                                <p>Каталог</p>
                            </button>
                            <Modal isOverlayHidden={true} isModalOpened={isCatalogOpened} setIsModalOpened={setIsCatalogOpened}>
                                <CatalogContent setIsModalOpened={setIsCatalogOpened} isModalOpened={isCatalogOpened}/>
                            </Modal>
                            <button className={styles.search_button}>
                                <img src={search} alt="search"/>
                            </button>
                        </div>
                        <span className={styles.divider}></span>
                        <nav className={styles.container_links}>
                            <Link to={'/brands'} className={styles.link}>Бренды</Link>
                            <Link to={'/service'} className={styles.link}>Сервис</Link>
                            <Link to={'/offers'} className={styles.link}>Услуги</Link>
                            <Link to={'/support'} className={styles.link}>Поддержка</Link>
                            <Link to={'/about'} className={styles.link}>О компании</Link>
                            <Link to={'/blog'} className={styles.link}>Блог</Link>
                            <Link to={'/locations'} className={styles.link}>Где купить</Link>
                            <Link to={'/contacts'} className={styles.link}>Контакты</Link>
                        </nav>
                        <div className={styles.container_icons}>
                            <HeaderButton
                                icon={match} styles={styles.button}
                                alt={'match'} width={17} height={17} amount={10}
                            />
                            <HeaderButton
                                icon={heart} styles={styles.button}
                                alt={'heart'} width={24} height={20} amount={15}
                            />
                            <HeaderButton
                                icon={cart} styles={styles.button}
                                alt={'cart'} width={21} height={24.5} amount={1}
                            />
                        </div>
                    </div>
            }
            <div className={styles.menu}>
                <a href="" className={styles.link}>
                    <p>Для дома</p>
                    <img src={triangleW} alt="triangle"/>
                </a>
                <span className={styles.divider}></span>
                <a href="" className={styles.link}>
                    <p>Для фитнес клуба</p>
                    <img src={triangleW} alt="triangle"/>
                </a>
            </div>
        </header>
    );
}

export default Header;

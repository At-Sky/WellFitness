import React from 'react';
import styles from './Footer.module.scss'
import instagram from '@assets/icons/Footer/instagram.svg'
import facebook from '@assets/icons/Footer/facebook.svg'
import youtube from '@assets/icons/Footer/youtube.svg'

import visa from '@assets/icons/Footer/visa.svg'
import mastercard from '@assets/icons/Footer/mastercard.svg'
import webmoney from '@assets/icons/Footer/webmoney.svg'
import paypal from '@assets/icons/Footer/paypal.svg'
import plane from '@assets/icons/Footer/paper-plane.svg'
import logo from '@assets/images/logo.svg'

function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.navbar}>
                <div className={styles.subnavbar}>
                    <h3 className={styles.subnavbar__title}>Каталог</h3>
                    <a className={styles.subnavbar__link}>Для дома</a>
                    <a className={styles.subnavbar__link}>Для фитнес клубов</a>
                    <a className={styles.subnavbar__link}>Акции</a>
                    <a className={styles.subnavbar__link}>Идеи и подборки </a>
                    <a className={styles.subnavbar__link}>Новинки</a>
                    <a className={styles.subnavbar__link}>Наши бренды</a>
                </div>
                <div className={styles.subnavbar}>
                    <h3 className={styles.subnavbar__title}>Поддержка</h3>
                    <a className={styles.subnavbar__link}>Доставка и оплата</a>
                    <a className={styles.subnavbar__link}>Условия возврата</a>
                    <a className={styles.subnavbar__link}>Сервисная заявка</a>
                    <a className={styles.subnavbar__link}>Обслуживание фитнес клубов</a>
                    <a className={styles.subnavbar__link}>FAQ</a>
                    <a className={styles.subnavbar__link}>Инструкции</a>
                    <a className={styles.subnavbar__link}>Гарантия</a>
                </div>
                <div className={styles.subnavbar}>
                    <h3 className={styles.subnavbar__title}>Услуги</h3>
                    <a className={styles.subnavbar__link}>3D проект</a>
                    <a className={styles.subnavbar__link}>Консалтинг</a>
                    <a className={styles.subnavbar__link}>Бизнес планирование </a>
                    <a className={styles.subnavbar__link}>Лизинг</a>
                    <a className={styles.subnavbar__link}>Trade-IN</a>
                    <a className={styles.subnavbar__link}>В рассрочку</a>
                </div>
                <div className={styles.subnavbar}>
                    <h3 className={styles.subnavbar__title}>О компании</h3>
                    <a className={styles.subnavbar__link}>О нас</a>
                    <a className={styles.subnavbar__link}>Наша миссия</a>
                    <a className={styles.subnavbar__link}>Наша команда</a>
                    <a className={styles.subnavbar__link}>Наши проекты</a>
                    <a className={styles.subnavbar__link}>Новости</a>
                    <a className={styles.subnavbar__link}>Блог</a>
                    <a className={styles.subnavbar__link}>Где купить</a>
                    <a className={styles.subnavbar__link}>Контакты</a>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.contacts__container}>
                        <button className={styles.contacts__button}>
                            Подписаться на рассылку
                            <img src={plane} alt={'plane'}/>
                        </button>
                        <div className={styles.calls}>
                            <p className={styles.calls__phone}>+7 (000) 000-00-00 для Москвы</p>
                            <p className={styles.calls__phone}>8 (800) 000-00-00  для России</p>
                            <button className={styles.calls__feedback}>Заказать звонок</button>
                        </div>
                        <div className={styles.mail}>
                            <p className={styles.mail__adress}>wellfitness@wellfit.ru</p>
                            <button className={styles.mail__feedback}>Написать</button>
                        </div>
                        <div className={styles.other}>
                            <a className={styles.other__privacy}>Политика конфиденциальности</a>
                            <a className={styles.other__public_offert}>Публичная офферта</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={styles.info}>
                <img src={logo} className={styles.info__logo}/>
                <div className={styles.info__icons}>
                    <img src={instagram} alt={'instagram'}/>
                    <img src={facebook} alt={'facebook'}/>
                    <img src={youtube} alt={'youtube'}/>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.buttons__item + ' ' + styles.buttons__item_partner}>Become a Partner</button>
                    <button className={styles.buttons__item + ' ' + styles.buttons__item_dealer}>Для дилеров</button>
                </div>
                <div className={styles.payment}>
                    <img src={visa} className={styles.payment__item}/>
                    <img src={mastercard} className={styles.payment__item}/>
                    <img src={webmoney} className={styles.payment__item}/>
                    <img src={paypal} className={styles.payment__item}/>
                </div>
                <p className={styles.info__rights}>© WellFitness. 2007 Все права защищены</p>
            </div>
        </footer>
    );
}

export default Footer;

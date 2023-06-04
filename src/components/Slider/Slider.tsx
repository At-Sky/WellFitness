import React, { useRef } from 'react';
import styles from './Slider.module.scss'
import { Navigation, Scrollbar } from 'swiper';

import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';

import bg1 from '@assets/images/Slider/Slide1/slide1bg.png';
import triangle from '@assets/images/Slider/Slide1/triangle.svg';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

interface ISliderProps {

}

function Slider(props: ISliderProps) {
    const swiperRef = useRef(null);

    return (
        <Swiper
            className={styles.main_slider}
            modules={[Navigation, Scrollbar]}
            spaceBetween={50}
            loop={true}
            slidesPerView={1}
            navigation={{
                prevEl: styles.button + ' ' + styles.button__prev,
                nextEl: styles.button + ' ' + styles.button__next,
            }}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            pagination={{ clickable: true }}
        >
            <SwiperSlide className={styles.swiper_slide}>
                <div className={styles.content}>
                    <h3 className={styles.content__title_sub}>Zero Runner</h3>
                    <h1 className={styles.content__title}>
                        Бег с нулевой ударной нагрузкой<br/>
                        <span className={styles.content__highlighted}>на суставы</span>
                    </h1>
                    <button className={styles.content__learn_more}>Узнать больше</button>
                </div>
                <img className={styles.background} src={bg1}/>
                <img className={styles.triangle} src={triangle}/>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
                <div className={styles.content}>
                    <h3 className={styles.content__title_sub}>Zero Runner</h3>
                    <h1 className={styles.content__title}>
                        Бег с нулевой ударной нагрузкой<br/>
                        <span className={styles.content__highlighted}>на суставы</span>
                    </h1>
                    <button className={styles.content__learn_more}>Узнать больше</button>
                </div>
                <img className={styles.background} src={bg1}/>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
                <div className={styles.content}>
                    <h3 className={styles.content__title_sub}>Zero Runner</h3>
                    <h1 className={styles.content__title}>
                        Бег с нулевой ударной нагрузкой<br/>
                        <span className={styles.content__highlighted}>на суставы</span>
                    </h1>
                    <button className={styles.content__learn_more}>Узнать больше</button>
                </div>
                <img className={styles.background} src={bg1}/>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
                <div className={styles.content}>
                    <h3 className={styles.content__title_sub}>Zero Runner</h3>
                    <h1 className={styles.content__title}>
                        Бег с нулевой ударной нагрузкой<br/>
                        <span className={styles.content__highlighted}>на суставы</span>
                    </h1>
                    <button className={styles.content__learn_more}>Узнать больше</button>
                </div>
                <img className={styles.background} src={bg1}/>
            </SwiperSlide>

            <div className={styles.main_slider__navigation}>
                <button className={styles.button + ' ' + styles.button__prev} onClick={() => swiperRef.current.slidePrev()}/>
                <button className={styles.button + ' ' + styles.button__next} onClick={() => swiperRef.current.slideNext()}/>
            </div>
        </Swiper>
    );
}

export default Slider;

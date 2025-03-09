import React from "react";
import s from "./NewItems.module.css";
const NewItems = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <h1 className={s.h1}>Новинки</h1>
                    <ul className={s.ul}>
                        <li className={s.li}>
                            <div className={s.bgi1}></div>
                            <h2 className={s.h21}>Leatherman</h2>
                            <p>Мультитул Leatherman Surge Black</p>
                            <div className={s.wrapReview}>
                                <svg className={s.icon}>
                                    <use href="/public/icons.svg#icon-stars-4"></use>
                                </svg>
                                <span className={s.span}>8 Відгуки</span>
                            </div>
                            <span className={s.price}>₴7 999</span>
                        </li>
                        <li className={s.li}>
                            <div className={s.bgi2}></div>
                            <h2 className={s.h21}>Garmin</h2>
                            <p>Годинник Fenix® 8 – 47 мм, AMOLED</p>
                            <div className={s.wrapReview}>
                                <svg className={s.icon}>
                                    <use href="/public/icons.svg#icon-stars-5"></use>
                                </svg>
                                <span className={s.span}>34 Відгуки</span>
                            </div>
                            <span className={s.price}>₴42 999</span>
                        </li>
                        <li className={s.li}>
                            <div className={s.bgi3}></div>
                            <h2 className={s.h21}>GSI</h2>
                            <p>Сковорідка GSI Outdoors Guidecast</p>
                            <div className={s.wrapReview}>
                                <svg className={s.icon}>
                                    <use href="/public/icons.svg#icon-stars-5"></use>
                                </svg>
                                <span className={s.span}>12 Відгуки</span>
                            </div>
                            <span className={s.price}>₴5 999</span>
                        </li>
                        <li className={s.li}>
                            <div className={s.bgi4}></div>
                            <h2 className={s.h21}>Thermopad</h2>
                            <p>Набір хімічних грілок для шиї Thermopad Neck Warmer 6 шт</p>
                            <div className={s.wrapReview}>
                                <svg className={s.icon}>
                                    <use href="/public/icons.svg#icon-stars-4"></use>
                                </svg>
                                <span className={s.span}>57 Відгуки</span>
                            </div>
                            <span className={s.price}>₴299</span>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    );
};

export default NewItems;

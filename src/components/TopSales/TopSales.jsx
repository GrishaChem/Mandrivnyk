import React from 'react'
import s from "./TopSales.module.css"

const TopSales = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <h1 className={s.h1}>Хіти Продажів
                    </h1>
                    <ul className={s.ul}>
                        <li className={s.li}>
                            <div className={s.bgi1}></div>
                            <h2 className={s.h21}>LOWA Boots</h2>
                            <p>Черевики RENEGADE EVO GTX MID</p>
                            <div className={s.wrapReview}>
                                <svg className={s.icon}>
                                    <use href="/public/icons.svg#icon-stars-5"></use>
                                </svg>
                                <span className={s.span}>583 Відгуки</span>
                            </div>
                            <span className={s.price}>₴11 999</span>
                        </li>
                        <li className={s.li}>
                            <div className={s.bgi2}></div>
                            <h2 className={s.h21}>Rab </h2>
                            <p>Жіноча куртка Rab Valiance </p>
                            <div className={s.wrapReview}>
                                <svg className={s.icon}>
                                    <use href="/public/icons.svg#icon-stars-5"></use>
                                </svg>
                                <span className={s.span}>792 Відгуки</span>
                            </div>
                            <span className={s.price}>₴12 999</span>
                        </li>
                        <li className={s.li}>
                            <div className={s.bgi3}></div>
                            <h2 className={s.h21}>Gerber</h2>
                            <p>Бушкрафт сокира Gerber </p>
                            <div className={s.wrapReview}>
                                <svg className={s.icon}>
                                    <use href="/public/icons.svg#icon-stars-5"></use>
                                </svg>
                                <span className={s.span}>48 Відгуки</span>
                            </div>
                            <span className={s.price}>₴2 999</span>
                        </li>
                        <li className={s.li}>
                            <div className={s.bgi4}></div>
                            <h2 className={s.h21}>Hyperlight Mountain Gear</h2>
                            <p>Туристичний рюкзак Unbound Ultralight Thru </p>
                            <div className={s.wrapReview}>
                                <svg className={s.icon}>
                                    <use href="/public/icons.svg#icon-stars-4"></use>
                                </svg>
                                <span className={s.span}>124 Відгуки</span>
                            </div>
                            <span className={s.price}>₴11 999</span>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default TopSales

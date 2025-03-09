import React from "react";
import s from "./Navigation.module.css";
import clsx from "clsx";
const Navigation = () => {
    return (
        <>
            <div className={s.container}>
                <ul className={s.ul}>
                    <li className={s.li}>
                        <img className={s.img} src="/Images/clothes.png" alt="Item 1" ></img>
                        <p className={clsx(s.p, s.bottom)}>Одяг</p>
                    </li>
                    <li className={s.li}>
                        <img className={s.img} src="/Images/bags.png" alt="Item 1" ></img>
                        <p className={clsx(s.p, s.bottom)}>Рюкзаки</p>
                    </li>
                    <li className={s.li}>
                        <img className={s.img} src="/Images/boots.png" alt="Item 1" ></img>
                        <p className={clsx(s.p, s.bottom)}>Взуття
                            демісезонне</p>
                    </li>
                    <li className={s.li}>
                        <img className={s.img} src="../../Images/gas.png" alt="Item 1" ></img>
                        <p className={clsx(s.p, s.up)}>Газові балони</p>
                    </li>
                    <li className={s.li}>
                        <img className={s.img} src="../../Images/nigga.png" alt="Item 1" ></img>
                        <p className={clsx(s.p, s.up)}>Гірські палиці</p>
                    </li>
                    <li className={s.li}>
                        <img className={s.img} src="../../Images/churki.png" alt="Item 1" ></img>
                        <p className={clsx(s.p, s.up)}>Взуття
                            Зимове</p>
                    </li>
                </ul>
            </div >
        </>
    );
};

export default Navigation;

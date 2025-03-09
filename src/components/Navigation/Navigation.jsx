import React from "react";
import s from "./Navigation.module.css";
const Navigation = () => {
    return (
        <>
            <div className={s.container}>
                <ul className={s.ul}>
                    <li className={s.li}>
                        <div className={s.bgi1}><img src="../../Images/clothes.png" alt="Item 1" /></div>
                    </li>
                    <li className={s.li}>
                        <div className={s.bgi1}><img src="../../Images/clothes1.png" alt="Item 1" /></div>
                    </li>
                    <li className={s.li}>
                        <div className={s.bgi1}><img src="../../Images/clothes1.png" alt="Item 1" /></div>
                    </li>
                    <li className={s.li}>
                        <div className={s.bgi1}><img src="../../Images/clothes1.png" alt="Item 1" /></div>
                    </li>
                    <li className={s.li}>
                        <div className={s.bgi1}><img src="../../Images/clothes1.png" alt="Item 1" /></div>
                    </li>
                    <li className={s.li}>
                        <div className={s.bgi1}><img src="../../Images/clothes1.png" alt="Item 1" /></div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navigation;

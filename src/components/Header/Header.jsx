import React from "react";
import s from "./Header.module.css";
const Header = () => {
  return (
    <>
      <div className={s.hitler}>
        Кінець сезону близько: Купуй зимове спорядження за особливою ціною
      </div>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.logoPic}></div>
          <div className={s.logoName}>Mandrivnyk</div>
        </div>
        <div className={s.inputWrap}>
          <input className={s.searchBar} type="text" placeholder="Я шукаю..." />
          <svg className={s.icon} width="24" height="24">
            <use href="icons.svg#icon-Basket-Icon"></use>
          </svg>
        </div>
        <div className={s.wrap}>
          <ul className={s.nav}>
            <li className={s.navItem}>Спорядження </li>
            <li className={s.navItem}>Чоловікам</li>
            <li className={s.navItem}>Жінкам</li>
            <li className={s.navItem}>Дітям</li>
            <li className={s.navItem}>Новинки</li>
            <li className={s.navItem}>Бренди</li>
            <li className={s.navItem}>Знижки</li>
          </ul>
        </div>
        <ul className={s.menu}>
          <li className={s.liI}>
            Список бажаного
            <svg className={s.iconAcc} width="24" height="24">
              <use href="icons.svg#icon-Heart"></use>
            </svg>
          </li>
          <li className={s.liI}>
            Акаунт
            <svg className={s.iconAcc} width="24" height="24">
              <use href="icons.svg#icon-Account"></use>
            </svg>
          </li>
          <li className={s.liI}>
            Кошик
            <svg className={s.iconAcc} width="24" height="24">
              <use href="icons.svg#icon-Basket-Icon"></use>
            </svg>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

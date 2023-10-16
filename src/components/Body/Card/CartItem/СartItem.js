import style from "./cartItem.module.css";
import { useState } from "react";

export const CartItem = ({
  title,
  image,
  price,
  id,
  amount,
  inCriseAmount,
  decriceAmount,
  deleteFromCart,
  theme,
}) => {
  return (
    <div className={style.cartRoot} id={theme}>
      <li className={style.container}>
        <h5 className={style.cartElementName}>{title}</h5>
        <img className={style.cartElementImg} src={image} />
      </li>
      <div className="style.cartMoney">
        <span className={style.cartElementPrice}>{price} ₽</span>
        <span className={style.cartAmount}>{amount}шт</span>
        <button
          className={style.buttons} id={theme}
          onClick={() => {
            inCriseAmount(id);
          }}
        >
          Увеличить
        </button>
        <button
          className={style.buttons} id={theme}
          onClick={() => {
            decriceAmount(id);
          }}
        >
          Уменьшить
        </button>
        <button
          className={style.buttons}id={theme}
          onClick={() => {
            deleteFromCart(id);
          }}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

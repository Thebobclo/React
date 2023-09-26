import style from "./cartItem.module.css";
import { useState } from "react";

export const CartItem = ({
  name,
  img,
  price,
  id,
  amount,
  inCriseAmount,
  decriceAmount,
  deleteFromCart,
}) => {
  return (
    <div className={style.cartRoot}>
      <li className={style.container}>
        <h5 className={style.cartElementName}>{name}</h5>
        <img className={style.cartElementImg} src={img} />
      </li>
      <div className="style.cartMoney">
        <span className={style.cartElementPrice}>{price}₽</span>
        <span className={style.cartAmount}>{amount}шт</span>
        <button
          className={style.buttons}
          onClick={() => {
            inCriseAmount(id);
          }}
        >
          Увеличить
        </button>
        <button
          className={style.buttons}
          onClick={() => {
            decriceAmount(id);
          }}
        >
          Уменьшить
        </button>
        <button
          className={style.buttons}
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

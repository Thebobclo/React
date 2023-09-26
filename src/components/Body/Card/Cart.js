import { useState } from "react";
import style from "./cart.module.css";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CartItem } from "./CartItem/СartItem";

export const Cart = ({
  onClose,
  className,
  cart,
  decriceAmount,
  deleteFromCart,
  inCriseAmount,
}) => {
  const summ = cart.reduce((total, elm) => total + elm.amount * elm.price, 0);
  return (
    <div className={className}>
      <span className={style.summ}>Общая стоимость: {summ} ₽</span>
      <IconButton onClick={onClose} color="primary" aria-label="Close">
        <CloseIcon />
      </IconButton>

      <div className={style.rootCart}>
        {cart.map((product) => (
          <CartItem
            key={product.id}
            id={product.id}
            amount={product.amount}
            name={product.name}
            img={product.img}
            price={product.price}
            decriceAmount={decriceAmount}
            deleteFromCart={deleteFromCart}
            inCriseAmount={inCriseAmount}
          />
        ))}
      </div>
    </div>
  );
};

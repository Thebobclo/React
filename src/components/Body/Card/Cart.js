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
  theme,
  data,
}) => {
  const summ = cart.reduce((total, elm) => total + elm.amount * elm.price, 0).toFixed(2);
  return (
    <div className={className} id={theme} >
      <span className={style.summ}>Общая стоимость: {summ} ₽</span>
      <IconButton onClick={onClose} color="inherit" aria-label="Close">
        <CloseIcon />
      </IconButton>

      <div className={style.rootCart} id={theme} >
        {cart.map((data) => (
          <CartItem
            key={data.id}
            id={data.id}
            amount={data.amount}
            title={data.title}
            image={data.image}
            price={data.price}
            decriceAmount={decriceAmount}
            deleteFromCart={deleteFromCart}
            inCriseAmount={inCriseAmount}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

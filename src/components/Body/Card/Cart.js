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
}) => {
  const summ = cart.reduce((total, elm) => total + elm.amount * elm.price, 0);
  return (
    <div className={className} id={theme} >
      <span className={style.summ}>Общая стоимость: {summ} ₽</span>
      <IconButton onClick={onClose} color="primary" aria-label="Close">
        <CloseIcon />
      </IconButton>

      <div className={style.rootCart} id={theme} >
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
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

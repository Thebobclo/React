import { useState } from "react";
import style from "./productCard.module.css";

export const ProductCard = ({ name, img, price, id,addToCart,inCriseAmount,decriceAmount,deleteFromCart }) => {
  return (
    <div className={style.root}>
      <li className={style.productsElement}>
        <h5 className={style.productsElementName}>{name}</h5>
        <img className={style.productsElementImg} src={img}></img>
        <span className={style.productsElementPrice}>{price}₽</span>
        <button onClick={()=>{addToCart(id)}} className={style.productsElementBtn}>Добавить в корзину</button>
      </li>
    </div>
  );
};

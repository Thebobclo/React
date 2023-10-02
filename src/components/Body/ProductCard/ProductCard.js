import { useState } from "react";
import style from "./productCard.module.css";

export const ProductCard = ({ name, img, price, id,addToCart,inCriseAmount,decriceAmount,deleteFromCart,theme}) => {
  return (
    <div className={style.root} id={theme}>
      <li className={style.productsElement} id={theme}>
        <h5 className={style.productsElementName}>{name}</h5>
        <img className={style.productsElementImg} src={img}></img>
        <span className={style.productsElementPrice}>{price}₽</span>
        <button onClick={()=>{addToCart(id)}} className={style.productsElementBtn}>Добавить в корзину</button>
      </li>
    </div>
  );
};

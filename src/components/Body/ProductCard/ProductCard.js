import { useState,useEffect } from "react";
import style from "./productCard.module.css";

export const ProductCard = ({ name, img, price, id,addToCart,inCriseAmount,decriceAmount,deleteFromCart,theme,data,useEffect}) => {
  return (

    <div className={style.root} id={theme}>
      <li className={style.productsElement} id={theme}>
        <h5 className={style.productsElementName}>{data.title}</h5>
        <img className={style.productsElementImg} src={data.image}></img>
        <span className={style.productsElementPrice}>{data.price}₽</span>
        <button onClick={()=>{addToCart(id)}} className={style.productsElementBtn}>Добавить в корзину</button>
      </li>
    </div>
  )
}
import style from "./body.module.css";
import { ProductCard } from "./ProductCard/ProductCard";
import { useState,useEffect } from "react";
import { Cart } from "./Card/Cart";
import { click } from "@testing-library/user-event/dist/click";

export const Body = ({
  isCartVisible,
  clickCardVisibleHandler,
  catalog,
  cart,
  addToCart,
  inCriseAmount,
  decriceAmount,
  deleteFromCart,
  toggleTheme,
  theme,
  data,
  useEffect,
}) => {

  
  return (
    <main className={style.mainContainer}>
      
      <div>
        {isCartVisible && (
          <Cart 
            cart={cart}
            onClose={clickCardVisibleHandler}
            className={style.cart}
            inCriseAmount={inCriseAmount}
            decriceAmount={decriceAmount}
            deleteFromCart={deleteFromCart}
            theme={theme}
          />
        )}
      </div>

      
      <div className={style.root} id={theme}>
      {data &&  (
             (data.map(data=> 
      <ProductCard
            key={data.id}
            id={data.id}
            name={data.name}
            img={data.image}
            price={data.price}
            addToCart={addToCart}
            theme={theme}
            useEffect={useEffect}
            data={data}   
            />)
            ))}
          </div>
        </main>
      );
    };
          
      {/* {data && (
      <div className={style.root} id={theme}>
        
        {data.map((good) => (
          
          <ProductCard
            key={data.id}
            id={data.id}
            name={data.name}
            img={data.img}
            price={data.price}
            addToCart={addToCart}
            theme={theme}
            useEffect={useEffect}
            data={data}
          />)
        ))}
      </div>
    </main>
  );
}; */}

import style from "./body.module.css";
import { ProductCard } from "./ProductCard/ProductCard";
import { useState } from "react";
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
  theme
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
        {catalog.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
            addToCart={addToCart}
            theme={theme}
          />
        ))}
      </div>
    </main>
  );
};

import style from "./body.module.css";
import { ProductCard } from "./ProductCard/ProductCard";
import { useState } from "react";
import { CATALOG } from "./resourses/catalog";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Cart } from "./Card/Cart";
import { click } from "@testing-library/user-event/dist/click";

export const Body = () => {
  const [isCartVisible, setCartVisible] = useState(false);
  const clickCardVisibleHandler = () => {
    setCartVisible(!isCartVisible);
  };
  return (
    <main>
      <div>
        <IconButton
          onClick={clickCardVisibleHandler}
          color="primary"
          aria-label="add to shopping cart"
        >
          <AddShoppingCartIcon />
        </IconButton>
        {isCartVisible && <Cart on />}
      </div>
      <div className={style.root}>
        {CATALOG.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
          />
        ))}
      </div>
    </main>
  );
};

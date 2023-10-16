import style from "./style.module.css";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React from "react";
import { createContext, useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const Header = ({
  clickCardVisibleHandler,
  inCriseAmount,
  decriceAmount,
  summa,
  deleteFromCart,
  theme,
  toggleTheme,
  checked,
 
}) => {
  return (
    <div className={style.container} id={theme}>
      <h1 className={style.header}>Guitar shop </h1>
      <IconButton
        onClick={clickCardVisibleHandler}
        color="inherit"
        aria-label="add to shopping cart"
        className={style.button}
      >
        <ShoppingCartIcon />
      </IconButton>

      <IconButton
        onClick={toggleTheme}
        color="inherit"
        className={style.switch}
      >
        {checked ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </div>
  );
};

import style from "./style.module.css";
import { useState } from "react";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const Header = ({ clickCardVisibleHandler,inCriseAmount,decriceAmount,summa,deleteFromCart }) => {
  return (
    <div className={style.container} >
       <h1 className={style.header}>Guitar shop</h1>
      <IconButton 
        onClick={clickCardVisibleHandler}
        color="primary"
        aria-label="add to shopping cart"
        className={style.button}>
        
        <AddShoppingCartIcon />
      </IconButton>
     
    </div>
  );
};

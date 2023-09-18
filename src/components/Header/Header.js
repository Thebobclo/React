import style from "./style.module.css";
import { useState } from "react";

export const Header = () => {
    
 const [text,setText] = useState("Guitar shop")
 const clicHendler = () => {
    setText("test")
 }
  return  <div> 
   <h1 className={style.header}>{text}</h1>
 
</div>
};


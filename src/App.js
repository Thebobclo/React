import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
import { useState } from "react";
import { CATALOG } from "./components/Body/resourses/catalog";

import { createContext } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const [isCartVisible, setCartVisible] = useState(false);
  const clickCardVisibleHandler = () => {
    setCartVisible(!isCartVisible);
  };
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const ItemCart = cart.find((elm) => elm.id === id);
    if (ItemCart) {
      const newCart = cart.map((elm) => {
        if (elm.id === id) {
          return { ...elm, amount: elm.amount + 1 };
        }
        return elm;
      });
      setCart(newCart);
      return;
    }
    const newItem = CATALOG.find((elm) => elm.id === id);
    const newCart = [...cart, { ...newItem, amount: 1 }];
    setCart(newCart);
  };

  //Уменшеие в корзине
  const decriceAmount = (id) => {
    const itemInCart = cart.find((elm) => elm.id === id);
    if (itemInCart.amount === 1) {
      deleteFromCart(id);
      return;
    }
    const newCart = cart.map((elm) => {
      if (elm.id === id) {
        return { ...elm, amount: elm.amount - 1 };
      }
      return elm;
    });
    setCart(newCart);
  };

  //Увеличение в корзине
  const inCriseAmount = (id) => {
    const newCart = cart.map((elm) => {
      if (elm.id === id) {
        return { ...elm, amount: elm.amount + 1 };
      }
      return elm;
    });
    setCart(newCart);
    return;
  };

  //Удалить эл из корзины
  const deleteFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <div className="App" id={theme}>
      <Header
        clickCardVisibleHandler={clickCardVisibleHandler}
        toggleTheme={toggleTheme}
        checked={theme==="light"}
      />
      <Body
        addToCart={addToCart}
        cart={cart}
        catalog={CATALOG}
        isCartVisible={isCartVisible}
        clickCardVisibleHandler={clickCardVisibleHandler}
        decriceAmount={decriceAmount}
        deleteFromCart={deleteFromCart}
        inCriseAmount={inCriseAmount}
        theme={theme}
        toggleTheme={toggleTheme}
      
      />
      <Footer id={theme} />
    </div>
  );
}

export default App;

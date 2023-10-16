import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
import { useState, useEffect } from "react";
import { CATALOG } from "./components/Body/resourses/catalog";

import { createContext } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("test");
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products/")
      .then((res) => {
        return res.json();
      })
      .then((json) => setData(json))
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
    const ItemCart = cart.find((data) => data.id === id);
    if (ItemCart) {
      const newCart = cart.map((data) => {
        if (data.id === id) {
          return { ...data, amount: data.amount + 1 };
        }
        return data;
      });
      setCart(newCart);
      return;
    }
    const newItem = data.find((data) => data.id === id);
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

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) {
    return <h1>...Loading</h1>;
  }
  if (error) {
    return <h5> {error.message}</h5>;
  }

  return (
    <div className="App" id={theme}>
      <Header
        clickCardVisibleHandler={clickCardVisibleHandler}
        toggleTheme={toggleTheme}
        checked={theme === "light"}
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
        useEffect={useEffect}
        data={data}
      />
      <Footer id={theme} />
    </div>
  );
}

export default App;

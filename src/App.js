import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
import { useState } from "react";
import { CATALOG } from "./components/Body/resourses/catalog";

function App() {
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
      return elm
    
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
    <div className="App">
      <Header clickCardVisibleHandler={clickCardVisibleHandler} />
      <Body
        addToCart={addToCart}
        cart={cart}
        catalog={CATALOG}
        isCartVisible={isCartVisible}
        clickCardVisibleHandler={clickCardVisibleHandler}
        decriceAmount={decriceAmount}
        deleteFromCart={deleteFromCart}
        inCriseAmount={inCriseAmount}
      />
      <Footer />
    </div>
  );
}

export default App;

//добавить в эдемент корзины кнопку убавить уведичить удалить из карзтны

//во всей корзине купить,общая сумма

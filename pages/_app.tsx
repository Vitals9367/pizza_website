import '../styles/globals.scss';
import _ from 'lodash';
import { useState } from 'react';
import type { AppProps } from 'next/app';

import { cartitemType, pizzaType } from "../utils/types";

import AppContext from '../AppContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {

  const [cartItems, setCartItems] = useState<cartitemType[]>([]);
  const [showNotification,setShowNotification] = useState(false);

  const addToCart = (pizza:pizzaType,amount:number = 1) => {

    const newCartItem:cartitemType = {
      pizza:pizza,
      amount: amount,
    }

    if(cartItems == []){
      setCartItems([newCartItem]);
      return;
    }

    let newArray = [...cartItems];
    const pizzaFound = cartItems.find(item => (item.pizza.name === pizza.name));

    if(typeof pizzaFound == 'undefined'){
      newArray.push(newCartItem);

    }else{

      if(newArray[newArray.indexOf(pizzaFound)].amount + newCartItem.amount > 100){
        return;
      }

      newArray[newArray.indexOf(pizzaFound)].amount += newCartItem.amount;
    }

    setCartItems(newArray);
    notify();
    return;

  }
  const removeFromCart = (pizza:pizzaType) => {
    if(cartItems == []){
      return;
    }

    let newArray = cartItems.filter(item => (item.pizza.name !== pizza.name));
    setCartItems(newArray);

  }
  const changeItemAmount = (cartItem:cartitemType, value:number) => {
    let newArray = [...cartItems];

    if(newArray.indexOf(cartItem) == -1)
      return;

    newArray[newArray.indexOf(cartItem)].amount = value;
    setCartItems(newArray);
  }

  const notify = () => {

    if(showNotification){
      return;
    }

    setShowNotification(true);

    const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 2500)
  
      return () => clearTimeout(timeout)        
  }

  const closeNotification = () => {
    setShowNotification(false);
  }


  return (
    <AppContext.Provider
      value={{
        state: {
          cartItems: cartItems,
          showNotification: showNotification,
        },
        update:{
          addToCart: addToCart,
          removeFromCart: removeFromCart,
          changeItemAmount: changeItemAmount,
          notify: notify,
          closeNotification: closeNotification,
        }
      }}
    >
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AppContext.Provider>
  )
}

export default MyApp

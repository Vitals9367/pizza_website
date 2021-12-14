import { cartitemType } from "./types";

export const priceAfterDiscount = (price:number, discount:number) => {
    
    if(discount < 0)
      return price + ((price / 100) * discount);
    else
      return price - ((price / 100) * discount);
  }

export const totalAmount = (cartItems:cartitemType[]) => {
    let total = 0;
    
    cartItems.map(item => {
        total += item.amount;
    })

    return total;

}

export const totalPrice = (cartItems:cartitemType[]) => {
    let total = 0;

    cartItems.map(item => {
        
        if(!item.pizza.discount){
            total += item.pizza.price * item.amount;
        }else{
            total += priceAfterDiscount(item.pizza.price, item.pizza.discount) * item.amount;
        }
    })

    return total;

}
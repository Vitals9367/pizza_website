import React, {useContext} from 'react'
import Image from 'next/image';
import AppContext from '../AppContext';
import styles from '../styles/CartItem.module.scss';
import { X } from 'react-feather';
import { priceAfterDiscount } from '../utils/helpers';

import { cartitemType, pizzaType } from '../utils/types';

interface ICartItem {
    item:cartitemType,
}

const CartItem:React.FC<ICartItem> = ({item}) => {
    const context = useContext(AppContext);
    const removeFromCart = context.update.removeFromCart;
    const changeItemAmount = context.update.changeItemAmount;

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {

        let value = parseInt(e.target.value);

        if(value < 1 || value > 100)
            return;

        if(value === undefined || value === NaN)
            return;

        changeItemAmount(item,value);
    }

    return (
        <div className={styles.cart_item}>
        <div className={styles.cart_item_image}>
            <Image
                src={item.pizza.imageSrc}
                alt='pizza'
                layout="fill"
                objectFit='cover'
            />
        </div>
        <div className={styles.cart_item_info}>
            <div className={styles.cart_item_row}>
                <h3>{item.pizza.name}</h3>
                <button onClick={() => removeFromCart(item.pizza)}>
                    <X width={20} height={20}/>
                </button>
            </div>
            <div className={styles.cart_item_row}>
                <div>
                    <p className={`${item.pizza.discount && styles.cart_crossed_price}`}>{item.pizza.price * item.amount}{item.pizza.currency}</p>
                    {item.pizza.discount && `${priceAfterDiscount(item.pizza.price,item.pizza.discount) * item.amount} ${item.pizza.currency}`}
                </div>
                <div>
                    x <input type="number" id="amount" name="amount" min="1" max="100" value={item.amount} onChange={(e) => changeInput(e)}/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CartItem

import React, {useContext} from 'react'
import styles from '../styles/Cart.module.scss';
import AppContext from '../AppContext';
import { totalAmount, totalPrice } from '../utils/helpers';
import CartItem from './CartItem';

interface ICart {
    show:boolean,
}

const Cart:React.FC<ICart> = ({show = false}) => {

    const context = useContext(AppContext);

    const cartItems = context.state.cartItems;

    return (
        <div className={`${styles.cart} ${show && styles.cart_show}`}>
            <h4>{cartItems && `${cartItems.length} items:`}</h4>
            <div className={styles.cart_wrapper}>
                {cartItems.length != 0
                ? cartItems.map((item,index) => (
                    <CartItem item={item} key={index}/>
                ))
                :<div className={styles.cart_empty}><p>Cart is Empty :(</p></div>}
            </div>
            <div className={styles.cart_checkout}>
                <div>
                    <p>Total amount: {totalAmount(cartItems)}</p>
                    <p>Total price: {totalPrice(cartItems)}$</p>
                </div>
                <button>
                    Order
                </button>
            </div>
        </div>
    )
}

export default Cart

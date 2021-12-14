import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image';
import AppContext from '../AppContext';
import {useRouter} from 'next/router';
import styles from '../styles/Navbar.module.scss';

import { ShoppingCart, X } from 'react-feather';
import chef from '../public/chef.svg';

interface INavbar {
    cartClick: () => void,
    showCart: boolean,
}

const Navbar:React.FC<INavbar> = ({cartClick, showCart=false}) => {

    const context = useContext(AppContext);
    const cartItems = context.state.cartItems;

    const router = useRouter()

    const [showBackground, setShowBackground] = useState(false);

    const cartAmount = () => {

        if(cartItems.length > 9)
            return 9
        else if (cartItems.length == 0)
            return null
        else
            return cartItems.length
    }

    useEffect(() => {
        const checkScroll = () => {
            if(window.scrollY > 100)
                setShowBackground(true);
            else
                setShowBackground(false);

        }

        window.addEventListener('scroll', checkScroll)
        return () => window.removeEventListener('scroll', checkScroll);

    },[]);

    const show = () => {
        if(router.pathname === '/pizza-info'){
            return true;
        }
        return showBackground;
    }

    return (
        <nav className={`${styles.nav} ${show() && styles.show_nav}`}>
            <div className={styles.logo_wrapper}>
                <div className={styles.nav_logo}>
                    <Image
                    src={chef}
                    alt='chef'
                    objectFit='contain'
                    />
                </div>
            </div>
            <div className={styles.nav_text}>
                <h3>Pizza House</h3>
            </div>
            <button className={styles.nav_cart} onClick={cartClick}>
                {showCart
                ?<div className={styles.cartIcon}>
                    <X width={28} height={28} />
                </div>
                :<div className={styles.cartIcon}>
                    {cartAmount() && `+${cartAmount()}`}
                    <ShoppingCart width={28} height={28} />
                </div> 
                }
            </button>
        </nav>
    )
}

export default Navbar

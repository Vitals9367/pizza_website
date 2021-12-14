import Router,{Router as routerType, withRouter} from 'next/router'
import React, {useContext, useEffect, useState} from 'react'
import { all } from '../utils/fakeData';

import Image from 'next/image';
import AppContext from '../AppContext';
import styles from '../styles/PizzaInfo.module.scss';
import { HeatIcon } from '../components/MenuItem';
import { priceAfterDiscount } from '../utils/helpers';
import {ArrowLeft} from 'react-feather';
import GoBack from '../components/GoBack';

interface IPizzaInfo {
    router:routerType,
}

const PizzaInfo:React.FC<IPizzaInfo> = ({router}) => {

    const context = useContext(AppContext);

    const addToCart = context.update.addToCart;

    const pizzaName = router.query.name?.toString();
    const pizzass = all;

    let pizzaFound = pizzass.find(obj => obj.name.toLowerCase() === pizzaName?.toLocaleLowerCase())

    const [amount,setAmount] = useState(1);

    useEffect(()=>{
        if(!pizzaFound){
            Router.push('/');
        }

    },[pizzaFound])

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {

        let value = parseInt(e.target.value);

        if(value < 1 || value > 100)
            return;

        if(value === undefined || value === NaN)
            return;

        setAmount(value);
    }

    const goBack = () => {
        Router.push('/');
    }

    if(!pizzaFound)
        return(<div></div>)

    return (
        <>
        <GoBack/>
        <div className={styles.container}>
            <div className={styles.image}>
                <Image
                    src={pizzaFound.imageSrc}
                    alt='pizza'
                    layout="fill"
                    objectFit='cover'
                />
            </div>
            <div className={styles.info}>
                <h2>{pizzaFound.name}</h2>
                <p>{pizzaFound.description}</p>
                <div className={styles.row}>
                   <h3>Heat:</h3> {Array.from({length: pizzaFound.heat}, (index) => <HeatIcon />)}
                </div>
                <div className={styles.row}>
                    <h3>Price:</h3>
                   <h3 className={`${pizzaFound.discount && styles.crossed}`}> {pizzaFound.price * amount}{pizzaFound.currency}</h3>
                   {pizzaFound.discount && <h3>{priceAfterDiscount(pizzaFound.price,pizzaFound.discount) * amount}{pizzaFound.currency}</h3>}
                </div>
                <div className={styles.row}>
                    <button onClick={() => {addToCart(pizzaFound,amount)}}>
                        Add to cart
                    </button>
                    <p>x</p>
                    <input type="number" id="amount" name="amount" min="1" max="100" value={amount} onChange={(e) => changeInput(e)}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default withRouter(PizzaInfo)

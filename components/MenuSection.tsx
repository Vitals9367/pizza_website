import React from 'react'
import MenuItem from './MenuItem'
import styles from '../styles/MenuSection.module.scss';

import { pizzaType } from '../utils/types';

interface IMenuSection {
    list: pizzaType[],
    topic: string,
}

const MenuSection:React.FC<IMenuSection> = ({list, topic}) => {

    return (
        <>
            <h3 className={styles.menu_topic}>{topic}</h3>
            <div className={styles.pizzas}>
                {list.map((pizza,index) => (
                    <MenuItem pizza={pizza} key={index}/>
                ))}
            </div>   
        </>
    )
}

export default MenuSection

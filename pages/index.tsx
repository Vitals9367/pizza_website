import React, {useRef, useState} from 'react';
import type { NextPage } from 'next';
import Image from 'next/image'

import styles from '../styles/Home.module.scss';
import MenuSection from '../components/MenuSection';

import { menuOptionType } from '../utils/types';
import {menuOptions} from '../utils/fakeData';
import Router from 'next/router';

const Home: NextPage = () => {
  
  const menu_ref = useRef(null);
  const [currentMenuOption,setCurrentMenuOption] = useState(menuOptions[0]);

  const changeMenuOption = (option:menuOptionType) => {
    if(currentMenuOption === option){
      return;
    }
    setCurrentMenuOption(option);
  }

  const scrollIntoView = (ref: React.RefObject<HTMLDivElement>) => {
    if(ref.current){
      ref.current.scrollIntoView();
    }
  }

  return (
    <div className={styles.homepage}>
      <div className={styles.hero}>
        <video preload="auto" autoPlay loop muted>
          <source src='/video.mp4' type="video/mp4"/>
        </video>
        <div className={styles.hero_text}>
          <div className={styles.txt}>
            <h1>Made</h1>
            <h1>with</h1>
            <h1>Love</h1>
          </div>
          <div className={styles.hero_lines}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <button className={styles.checkout_menu} onClick={() => scrollIntoView(menu_ref)}>
            <h3>Checkout Menu</h3>
          </button>
        </div>
      </div>
      <div ref={menu_ref} className={styles.menu}>
        <div className={styles.menu_options}>
          {menuOptions.map((option,index) => (
            <button className={`${currentMenuOption == option && styles.active}`} onClick={() => changeMenuOption(option)} key={index}>{option.name}</button>
          ))}
        </div>
        {currentMenuOption.sections.map((section,index) => (
          <MenuSection topic={section.name} list={section.list} key={index}/>
        ))}
        <button className={styles.all_button} onClick={() => Router.push('/all-pizzas')}>
          See all pizzas
        </button>
      </div>
      <div className={styles.ad}>
        <div className={styles.ad_column}>
          <h2>La Cucina</h2>
          <p>
          We believe that every restaurant has its heart and it’s the kitchen. La Cucina means kitchen in Italian and in our restaurant & pizzeria it is open for every guest. The way food is prepared and made is important. What if you could actually see how your dish is created by our chefs? You can see it! We have an open kitchen which means all the action is there and you can enjoy it when sitting on your table.
          <br/>
          <br/>
          Our menu is versatile. You have fantastic meat dishes, salads and pastas.
          <br/>
          <br/>
          Do we have pizzas? Of course we do! Actually we have really special ones, which are called Neapolitan style pizzas. Come and try!
          </p>
        </div> 
        <div className={styles.ad_column}>
          <Image
            src='/pizzeria.jpg'
            alt='ad'
            layout="fill"
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  )
}

export default Home

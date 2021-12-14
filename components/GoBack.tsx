import Router from 'next/router';
import React from 'react'
import { ArrowLeft } from 'react-feather'

import styles from '../styles/GoBack.module.scss';

const GoBack = () => {

    const goBack = () => {
        Router.back();
    }

    return (
        <button className={styles.back} onClick={() => goBack()}>
            <ArrowLeft width={36} height={36}/>
        </button>
    )
}

export default GoBack

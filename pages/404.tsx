import Router from 'next/router';
import React, {useEffect} from 'react'

const Custom404 = () => {
    useEffect(()=>{
        Router.push('/');
    },[])
    return(null);
}

export default Custom404

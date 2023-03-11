import React from 'react';
import styles from './Coin.module.css'

const Coin = (props) => {

    const {id , symbol , name , image , rang , price} = props
    return (
        <div className={"col-12 d-flex align-items-center justify-content-between p-3 bg-secondary m-auto mt-3 rounded-4 shadow border border-2 border-dark"} style={{height:"100px"}}>
            <img height={"100%"} src={image} />
            <h5>{name}</h5>
            <h5>{symbol}</h5>
            <h5>{price}</h5>
            <h5 className={rang > 0 ? styles.rangeA : styles.rangeB}>{rang}</h5>
        </div>
    );
};

export default Coin;
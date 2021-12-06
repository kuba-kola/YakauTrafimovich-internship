import React from 'react';
import { connect } from 'react-redux';
import {deleteFromCart} from '../../actions';
import WithEventService from '../hoc';

import './cart-table.scss';

const CartTable = ({items, deleteFromCart, EventService}) => {
    if( items.length === 0){
        return (<div className="cart__title"> У вашым кошыку нічога няма :( </div>)
    }
    return (
        <>
            <div className="cart__title">Вашая замова:</div>
            <div className="cart__list">
            {
                items.map( item => {
                    const {price, title, url, id, qtty} = item;
                    return (
                        <div key = {id} className="cart__item">
                            <img src={url} className="cart__item-img" alt={title}></img>
                            <div className="cart__item-title">{title}</div>
                            <div className="cart__item-price">{price}$ * {qtty}</div>
                            <div onClick = {() => deleteFromCart(id)}className="cart__close">&times;</div>
                        </div>
                    );
                })
            }
            </div>
            <button onClick = {() => {EventService.setOrder( generateOrder(items))} } className = "order">Аформіць замову</button>
        </>
    );
};

const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            qtty: item.qtty
        }
    })
    return newOrder;
}

const mapStateToProps = ({items}) => {
    return{
        items 
    }
};

const mapDispatchToProps = {
    deleteFromCart
}

export default WithEventService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));
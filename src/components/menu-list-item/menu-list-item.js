import React from 'react';
import { Link } from 'react-router-dom';
import './menu-list-item.scss';

const PosterListItem = ( {posterItem, onAddToCart}) => {
    const {title, price, url, category} = posterItem;
    
    return (
        <>
            <li className="poster__item">
                <Link to = {`/${posterItem.id}`}>
                    <div className="poster__title">{title}</div>
                    <img className="poster__img" src={url} alt={title}></img>
                    <div className="poster__category">Category: <span>{category}</span></div>
                    <div className="poster_price">Price: <span>{price}$</span></div>
                    <button onClick = {(e) => {
                            e.preventDefault();
                            onAddToCart();
                        } } 
                        className="poster__btn">Add to cart</button>
                    <span className = {`poster__category_Img ${category}`}></span>
                </Link>
            </li>
        
        </>
    )
}


export default PosterListItem;
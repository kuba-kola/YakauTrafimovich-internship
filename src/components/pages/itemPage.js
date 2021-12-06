import React, {Component} from 'react';
import { connect } from 'react-redux';
import WithEventService from '../hoc/';
import Spinner from '../spinner';
import Error from '../error';
import {posterLoaded, posterRequested, posterError, addedToCart} from '../../actions';

import './itemPage.css';



class ItemPage extends Component {

    componentDidMount() {
        if( this.props.posterItems.length === 0){
            this.props.posterRequested();

            const {EventService} = this.props;
            EventService.getPosterItems()
                .then(res => this.props.posterLoaded(res))
                .catch(error => this.props.posterError());
        }
    }

    render() {
        const {loading, error, posterItems} = this.props;
        if(error) {
            return (
                <div className = "item_page">
                    <Error/>
                </div>
            )
        }
        if(loading) {
            return (
                <div className = "item_page">
                    <Spinner/>
                </div>
            )
        }
        const item = posterItems.find(el => +el.id === +this.props.match.params.id)
        const{title, url, category, price, id} = item;
        //console.log(this.props.menuItems)


        return (
            <div className = "item_page">
                <div className="poster__item item_block">
                     <div className="poster__title">{title}</div>
                    <img className="poster__img" src={url} alt={title}></img>
                    <div className="poster__category">Category: <span>{category}</span></div>
                    <div className="poster__price">Price: <span>{price}$</span></div>
                    <button onClick = {()=>this.props.addedToCart(id)} className="poster__btn">Add to cart</button>
                    <span className = {`poster__category_Img ${category}`}></span> 
                </div>
            </div>
        );
    }
}




const mapStateToProps =  (state) =>{
    return {
        posterItems: state.poster,
        loading: state.loading,
        error: state.error
    }
}


const mapDispatchToProps = {
    posterLoaded: posterLoaded,
    posterRequested,
    posterError,
    addedToCart
}


export default WithEventService ()( connect(mapStateToProps, mapDispatchToProps)(ItemPage) );
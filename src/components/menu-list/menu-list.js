import React, {Component} from 'react';
import PosterListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithEventService from '../hoc';
import {posterLoaded, posterRequested, posterError, addedToCart} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './menu-list.scss';

class PosterList extends Component {

    componentDidMount() {
        this.props.posterRequested();

        const {EventService} = this.props;
        EventService.getPosterItems()
            .then(res => this.props.posterLoaded(res))
            .catch(() => this.props.posterError());
    }

    render() {
        const {posterItems, loading, error, addedToCart} = this.props;
        if (error){
            return <Error/>
        }
        
        if (loading) {
            return <Spinner/>
        }
        const items = posterItems.map(posterItem => {
                return ( <PosterListItem 
                            key = {posterItem.id} 
                            posterItem = {posterItem }
                            onAddToCart = {() => addedToCart(posterItem.id)}/>
                )
            })

        return (
            <View items = {items}/> 
            )
    }
};

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


const View = ({items}) => {

    return (
        <ul className="poster__list">
            {items}
        </ul>
    ) 
}

export default WithEventService ()( connect(mapStateToProps, mapDispatchToProps)(PosterList) );
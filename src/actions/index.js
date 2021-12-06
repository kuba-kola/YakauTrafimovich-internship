const posterLoaded = (newPoster) => {
    return {
        type: 'POSTER_LOADED',
        payload: newPoster
    }
}

const posterRequested = () => {
    return {
        type: 'POSTER_REQUESTED',
    }
}

const posterError = () => {
    return {
        type: 'POSTER_ERROR',
    }
}

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    }
}

const deleteFromCart = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    }
}

export {
    posterLoaded,
    posterRequested,
    posterError,
    addedToCart,
    deleteFromCart
};
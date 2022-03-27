import React from 'react';
import './FavouriteList.css'
const FavouriteList = ({ list }) => {
    return (
        <div className='favourite-list'>
            <h4>Your list</h4>
            <p>{list.length}</p>
        </div>
    );
};

export default FavouriteList;
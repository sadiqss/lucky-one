import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, img, continent } = props.country;
    return (
        <div className='country'>
            <img src={img} alt="" />
            <div className='country-info'>
                <p className='country-name'>Destination:{name}</p>
                <p>Continent:{continent}</p>
            </div>
            <button className='btn-list'>
                <p>Add to your List</p>
            </button>
        </div>
    );
};

export default Country;
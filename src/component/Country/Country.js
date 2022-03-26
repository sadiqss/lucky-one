import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, img, continent } = props.country;
    return (
        <div className='country'>
            <img src={img} alt="" />
            <p className='country-name'>Destination:{name}</p>
        </div>
    );
};

export default Country;
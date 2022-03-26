import React, { useEffect, useState } from 'react';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className='travel-container'>
            <div className="countries-container">
                <h2>This is list</h2>
            </div>
            <div className="your-list">
                <h4>Your list</h4>
            </div>
        </div>
    );
};

export default Countries;
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('countries.json')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);
    return (
        <div className='travel-container'>
            <div className="countries-container">
                {
                    countries.map(country => <Country
                        key={country.id}
                        country={country}
                    ></Country>)
                }
            </div>
            <div className="your-list">
                <h4>Your list</h4>
            </div>
        </div>
    );
};

export default Countries;
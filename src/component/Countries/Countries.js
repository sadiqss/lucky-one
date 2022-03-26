import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('countries.json')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    const handleAddToList = (country) => {
        const newList = [...list, country];
        setList(newList);
    }

    return (
        <div className='travel-container'>
            <div className="countries-container">
                {
                    countries.map(country => <Country
                        key={country.id}
                        country={country}
                        handleAddToList={handleAddToList}
                    ></Country>)
                }
            </div>
            <div className="your-list">
                <h4>Your list</h4>
                <p>{list.length}</p>
            </div>
        </div>
    );
};

export default Countries;
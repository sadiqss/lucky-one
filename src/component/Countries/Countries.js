import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import FavouriteList from '../FavouriteList/FavouriteList';
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
                <FavouriteList list={list}></FavouriteList>
            </div>
        </div>
    );
};

export default Countries;
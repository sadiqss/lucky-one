import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Country.css'

const Country = (props) => {
    const { country, handleAddToList } = props;
    const { name, img, continent, language } = country;

    return (
        <div className='country'>
            <img src={img} alt="" />
            <div className='country-info'>
                <p className='country-name'>Destination:{name}</p>
                <p>Continent:{continent}</p>
                <p><small>Language:{language}</small></p>
            </div>
            <button onClick={() => handleAddToList(country)} className='btn-list'>
                <p className='btn-text'>Add to your List</p>
                <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Country;
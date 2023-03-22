import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.contry)
    const {name, area, population, flags
    } = props.contry
    return (
        <div className='container'>
            <img src={flags.png} alt="" />
            <h4>Country Name: {name.common}</h4> 
            <h6>population: {population}</h6>
            <h6>area: {area}</h6>
        </div>
    );
};

export default Country;
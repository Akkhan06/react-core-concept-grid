import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countryes.css'

const Countryes = () => {
    const [contryes, setContry] = useState([])
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data  => setContry(data))
    },[])
    return (
        <div>
            <h1>Countries availabl: {contryes.length}</h1>
           <div className='containers'>
             {
                contryes.map(contry => <Country contry={contry}
                key={contry.cca2}></Country>)
             }
           </div>
        </div>
    );
};

export default Countryes;
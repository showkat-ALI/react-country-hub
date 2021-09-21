import React from 'react';
import './County.css'

const Country = (props) => {
    const{name,flag}= props.country

    return (
        <div className="country">
            <img src={flag} alt="" />
            <p>Name: {name}</p>
        </div>
    );
};

export default Country;
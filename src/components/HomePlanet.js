import React, { useState, useEffect } from 'react';
import axios  from 'axios';


function HomePlanet(props){
    const { homePlanet } = props;
    const [planet, setPlanet] = useState('')
    
    useEffect(() => {
        axios.get(homePlanet)
            .then(res => {
                setPlanet(res.data.name);
            })
            .catch(err => {
                console.error ('something went wrong');
            })
    })
    
    return (
        <p> Home Planet: {planet}</p>
    )
}
export default HomePlanet
import React from 'react';
import HomePlanet from './HomePlanet';

function CharacterInfo(props){
    const { character, showInfo } = props;

    return (
    <div className='other-info-container'>
        {
            showInfo ? 
            <div>
                 <HomePlanet homePlanet ={character.homeworld}/>
                <p>Birth Year: {character['birth_year']}</p>
                <p>Eye Color: {character['eye_color']}</p>  
                <p> 
                    { character['hair_color'] === 'n/a' || character['hair_color'] === 'none' ? null : `Hair Color: ${character['hair_color']}` 
            }
                </p> 
            </div> 
            : null
        }
    </div> 
    )
}



export default CharacterInfo;
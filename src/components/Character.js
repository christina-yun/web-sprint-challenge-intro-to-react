// Write your Character component here
import React from 'react';
import styled from 'styled-components';

import HomePlanet from './HomePlanet';

//styling the components
const StyledCharacter = styled.div`
    display:flex;
    margin: 0 3rem;

    .card{
        display:flex;
        margin:1rem;

    }
    .name{
        width:17rem;
        display:flex;
        justify-content:flex-start;
    }
    h2{
        font-family:'Geostar Fill';
    }

    .other-info{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        width:12rem;
        line-height:0.1;
        margin: 0 0 0 7rem;
        font-family: 'Work Sans';
        font-weight:800;
    }

    p{
        
    }
`

function Character(props){
    const { character } = props;

    return (
        <StyledCharacter>
            <div className='card'>
                <div className='name'>
                   <h2>{character.name}</h2>
                </div>
                <div className='other-info'>
                    <HomePlanet homePlanet ={character.homeworld}/>
                    <p>Birth Year: {character['birth_year']}</p>
                    <p>Eye Color: {character['eye_color']}</p>  
                    <p>Hair Color: {character["hair_color"]}</p>  
                </div>
            </div>
        </StyledCharacter>
    )
}
export default Character;
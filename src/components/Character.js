// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';

import CharacterInfo from './CharacterInfo';

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



    .other-info-container{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        width:12rem;
        line-height:0.1;
        margin: 0 0 0 7rem;
        font-family: 'Work Sans';
        font-weight:800;
    }
`

function Character(props){
    const { character } = props;
    const [showInfo, setShowInfo] = useState(false);

    return (
        <StyledCharacter>
            <div className='card'>
                <div className='name'>
                   <h2>{character.name}</h2>
                   <button onClick ={() => setShowInfo(!showInfo)}>+</button>
                </div>
                <CharacterInfo character = {character} showInfo = {showInfo}/>          
            </div>
        </StyledCharacter>
    )
}
export default Character;
// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';

import CharacterInfo from './CharacterInfo';
import Toggle from './Toggle';

//styling the components
const StyledCharacter = styled.div`
    display:flex;
    margin: 0 3rem;

    .card{
        display:flex;
        margin:1rem;
    }
    .name{
        width:18rem;
        display:flex;
        justify-content:flex-start;
        padding:0.6rem;
    }

    h2{
        font-family:'Geostar Fill';
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
                   <Toggle setShowInfo={setShowInfo} showInfo={showInfo}/>
                </div>
                <CharacterInfo character = {character} showInfo = {showInfo}/>          
            </div>
        </StyledCharacter>
    )
}
export default Character;
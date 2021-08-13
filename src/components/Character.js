// Write your Character component here
import React from 'react';
import styled from 'styled-components';

//styling the components
const StyledCharacter = styled.div`
    display:flex;
    margin: 0 5rem;
`

function Character(props){
    const { character } = props;

    return (
        <StyledCharacter>
            <h2>{character.name}</h2>
            {/* <p>Homeworld: {character.homeworld}</p> */}
            <div className='other-info'>
            <p>Birth Year: {character['birth_year']}</p>
            <p>Hair Color: {character['hair_color']}</p>
            <p>Eye Color: {character['eye_color']}</p>    
            </div>

        </StyledCharacter>
    )
}
export default Character;
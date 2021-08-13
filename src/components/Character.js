// Write your Character component here
import React from 'react';
import styled from 'styled-components';

//styling the components
const StyledCharacter = styled.div`
    display:flex;
    margin: 0 10rem;

    .card{
        display:flex;
        margin:1rem;

    }
    .name{
        width:20rem;
        background-color:blue;
        opacity:1;
    }
    h2{
        margin:
    }

    .other-info{
        margin:0 2rem;
        background-color:pink;
        opacity:1.5;
    }

    p{}
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
                    {/* <p>Homeworld: {character.homeworld}</p> */}
                    <p>Birth Year: {character['birth_year']}</p>
                    <p>Hair Color: {character['hair_color']}</p>
                    <p>Eye Color: {character['eye_color']}</p>    
                </div>
            </div>
        </StyledCharacter>
    )
}
export default Character;
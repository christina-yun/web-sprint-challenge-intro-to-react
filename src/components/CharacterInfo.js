import React from 'react';
import styled from 'styled-components'
import HomePlanet from './HomePlanet';

const StyledInfo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    line-height:0.1;
    font-family: 'Work Sans';
    font-weight:800;
    
`

function CharacterInfo(props){
    const { character, showInfo } = props;

    return (
    <StyledInfo>
        {
            showInfo ? 
            <div>
                 <HomePlanet homePlanet ={character.homeworld}/>
                <p>Birth Year: {character['birth_year']}</p>
                <p>Eye Color: {character['eye_color']}</p>  
                <p> 
                    { character['hair_color'] === 'n/a' || character['hair_color'] === 'none' ? ' ' : `Hair Color: ${character['hair_color']}` 
            }
                </p> 
            </div> 
            : null
        }
    </StyledInfo> 
    )
}



export default CharacterInfo;
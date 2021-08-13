//import tools
import React, { useState, useEffect } from 'react';
import axios from 'axios'

//import overall styling
import styled from 'styled-components'

//import children components
import Character from './components/Character';

//import fonts
import WebFont from 'webfontloader';

const StyledHeader= styled.h1`
  font-family:'Geostar Fill';
  text-align:center
}
`
const StyledCard= styled.div`
  background-color:rgba(255,255,255,0.5);
  margin: 2rem 9rem;
  border-radius:1.5rem;
  display:flex;
  flex-direction:column;
  align-items:flex-start;

`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [listOfCharacters, setListOfCharacters] = useState([]);

  //load fonts
  useEffect(()=> {
    WebFont.load({
      google:{
        families:
        ['Geostar Fill', 'Work Sans']
        }
      });
    }, [])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //fetch data from API
  useEffect(() =>{
    axios.get('https://swapi.dev/api/people/')
    .then(res =>{
      setListOfCharacters(res.data)
    })
    .catch(err => {
      console.error ('Oops, please try again')
    })
  },[])

  return (
    <div className="App">
      <StyledHeader>CHARACTERS</StyledHeader>
        <StyledCard>
          {listOfCharacters.map((object, index) => {
            return <Character key={index} character={object} />
          })}
        </StyledCard>
    </div>
  );
}
export default App;
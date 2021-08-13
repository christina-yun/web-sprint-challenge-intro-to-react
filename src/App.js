//import tools
import React, { useState, useEffect } from 'react';
import axios from 'axios'

//import overall styling
import './App.css';

//import children components
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [listOfCharacters, setListOfCharacters] = useState([]);

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
      <h1 className="Header">Characters</h1>
        <div className='allcards'>
          {listOfCharacters.map((object, index) => {
            return <Character key={index} character={object} />
          })}
        </div>
    </div>
  );
}
export default App;
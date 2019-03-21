import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      characters: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/characters')
    .then (
       json => { 
        //full return...
        console.log(json) 

        //iterating through array from money world api
        var characterArray = json.data;
        var characterArrayLength = json.data.length;
        for (var i = 0; i < characterArrayLength; i++) {
          console.log(characterArray[i]);
         }
         this.setState({
          characters: [...characterArray]
        })
        })
    .catch(error => alert(error))
  }

  render() {
    console.log(this.state.characters);
    const characters = this.state.characters.map((character, i) => (
      <ul key={i}> 
        <li> Name: {character.name} </li>
        <li> Skill: {character.skill} </li>
        <li> Money: {character.money} </li>
      </ul>
    ))
    return (
      <div className="App">
        {characters}
      </div>
    );
  }
}

export default App;

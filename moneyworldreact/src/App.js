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
          characters: [characterArray]
        })
        })
    .catch(error => alert(error))
  }

  render() {
    var characters = this.state.characters;
    console.log(characters[0]);
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;

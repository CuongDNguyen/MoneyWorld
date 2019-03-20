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
    axios.get('http://localhost:8080/characters').then( json => console.log(json) )
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;

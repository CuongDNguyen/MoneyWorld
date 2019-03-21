import React from 'react';
import axios from 'axios'

export default class CharacterForm extends React.Component {
    state = {
        name: '',
        skill: '',
        amount: '',
    };

    postRequest() {
        // axios.post('http://localhost/characters', {
        //     name: 'Cuong',
        //     skill: 'Never give up',
        //     money: 0
        // }).then( function (response) {
        //     console.log(response);
        // }).catch(function (error) {
        //     console.log(error);
        // })
        axios({
            method: 'post',
            url: 'http://localhost:8080/characters',
            data: {
              name: 'Cuong',
              skill: 'test',
              amount: 5
            }
          });
    }
    render() {
        return (
            <form onSubmit={this.postRequest()}>
            <label>Name: <input type="text" name="name" placeholder="Name of new character"/></label>
            <label>Skill: <input type="text" name="skill" placeholder="Money making skill"/></label>
            <label>Name: <input type="text" name="amount" placeholder="Starting money amount"/></label>
            <button type="submit">New character</button>
            </form>
        )
    }
}
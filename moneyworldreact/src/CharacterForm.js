import React from 'react';
import axios from 'axios'

export default class CharacterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', skill: '', amount: ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSkill = this.handleChangeSkill.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeSkill(event) {
    this.setState({skill: event.target.value});
  }

  handleChangeAmount(event) {
    this.setState({amount: event.target.value});
  }

  handleSubmit(event) {
      axios({
          method: 'post',
          url: 'http://localhost:8080/characters',
          data: {
              name: this.state.name,
              skill: this.state.skill,
              amount: this.state.amount
          }
      })
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChangeName} />
        </label>
        <label>
          Skill:
        <input type="text" value={this.state.skill} onChange={this.handleChangeSkill} />
        </label>
        <label>
          Amount:
        <input type="text" value={this.state.amount} onChange={this.handleChangeAmount} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
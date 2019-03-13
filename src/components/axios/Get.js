import React, { Component } from 'react';

// Axios
import axios from 'axios'

// Components
import Card from './Card';

export default class Get extends Component {
  constructor() {
    super();
    this.state = {
      id: '1',
      response: {},
      errors: '',
    }
  };

  onChange = (e) => {
    this.setState({ id : e.target.value })
  }

  onClickBtnOne = () => {
    const { id } = this.state;

    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then(res => this.setState({ response: res.data }))
      .catch(err => console.log(err))
  };

  onClickBtnTwo = () => {
    this.setState({ response: {} })
  };

  render() {
    
    const { response } = this.state;

    return (
      <div className='get'>
        <Card
          title = 'Get Request'
          subtitle = 'https://jsonplaceholder.typicode.com/comments/id'
          buttonOne = 'Get Todos'
          buttonTwo = 'Clear'
          onClickBtnOne = {this.onClickBtnOne}
          onClickBtnTwo = {this.onClickBtnTwo}
          onChange = {this.onChange}
          value = {this.state.input}
          response = {response}
          error = {this.state.errors}
        />
      </div>
    )
  }
}

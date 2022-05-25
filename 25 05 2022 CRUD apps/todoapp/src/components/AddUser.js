import React, { Component } from 'react';

class AddUser extends Component {
  state = {
    name: null,
    isEditing: false,
    date: new Date().toLocaleString('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
    }),
  };
  //call addUser (App.js)
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return { ...prevState };
    }, this.props.addUser(this.state));

    e.target.reset();
  };
  // update state
  updateState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className='row'>
        <form onSubmit={this.handleSubmit}>
          <div className='input-field col s4'>
            <input
              name='name'
              autoComplete='off'
              placeholder='Enter todo'
              required
              type='text'
              onChange={this.updateState}
            />
          </div>
          <div className='input-field col s2'></div>
          <div className='input-field col s2'>
            <input type='submit' value='Add +' className='btn blue' />
          </div>
        </form>
      </div>
    );
  }
}
export default AddUser;

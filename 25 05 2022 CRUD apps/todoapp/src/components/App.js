import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';

class App extends Component {
  // Default dummy data
  state = {
    users: [
      { name: 'Travis Jackson', isEditing: false },
      { name: 'Linda Moorhouse', isEditing: false },
      { name: 'Jeffrey Delgado', isEditing: false },
    ],
  };

  componentDidUpdate(prevProps, prevState) {
    window.localStorage.setItem('users', JSON.stringify(this.state.users));
  }
  componentDidMount() {
    const users = JSON.parse(window.localStorage.getItem('users'));
    if (users && users.length > 0) {
      this.setState({ users: users });
    }
  }
  // (newUser) is received from AddUser.js
  addUser = (newUser) => {
    let users = [...this.state.users, newUser];
    //console.log(users);
    this.setState({
      users,
    });
  };

  // when press edit button
  // (i) is received from Users.js
  pressEditBtn = (i) => {
    let users = this.state.users;
    users[i].isEditing = true;
    this.setState({
      users,
    });
  };

  // (i, name, age) is received from Users.js
  updateUser = (i, name) => {
    let users = this.state.users; // because state is immutable

    users[i].name = name;
    users[i].isEditing = false;

    this.setState({
      users,
    });
  };
  // (i) is received from Users.js
  pressDelete = (i) => {
    let users = this.state.users.filter((u, index) => {
      return index !== i;
    });
    this.setState({
      users,
    });
  };

  render() {
    return (
      <div className='container'>
        <h1>Todo CRUD React App</h1>
        <Users
          allUsers={this.state.users}
          pressEditBtn={this.pressEditBtn}
          updateUser={this.updateUser}
          pressDelete={this.pressDelete}
        />
        <AddUser addUser={this.addUser} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class Avatars extends Component {
  state = {
    loading: false,
    avatars: [],
    searchResults: [],
  };

  fetchCors = async (url) => {
    try {
      const res = await fetch(
        `https://nameless-citadel-58066.herokuapp.com/${url}`
      );
      const data = await res.json();
      return data.results;
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    const avatars = await this.fetchCors(
      'https://randomuser.me/api/?results=20&inc=name,picture'
    );
    this.setState({ loading: true, avatars: avatars, searchResults: avatars });
    console.log(Array.isArray(this.state.avatars));
    console.log(this.state.avatars);
    console.log(this.state.avatars.map((person) => person));
  }

  searchAvatars(value) {
    const res = this.state.avatars.filter((avatar) =>
      (avatar.name.first + avatar.name.last)
        .toLowerCase()
        .includes(value.toLowerCase())
    );
    this.setState({ loading: true, searchResults: res });
  }

  render() {
    return (
      <>
        <div className='contain'>
          <input
            type='text'
            onChange={(e) => this.searchAvatars(e.target.value)}
          />
        </div>
        {
          <div className='contain'>
            {this.state.searchResults.map((person, index) => {
              return (
                <div key={index}>
                  <h6>
                    {person.name.title} {person.name.first} {person.name.last}
                  </h6>
                  <img src={person.picture.large} alt='' />
                </div>
              );
            })}
          </div>
        }
      </>
    );
  }
}
export default Avatars;

import React from 'react';

class LifeCycleMethods extends React.Component {
  state = { favoriteColor: 'green' };

  componentDidMount = () => {
    this.timer = setTimeout(
      () => this.setState({ favoriteColor: 'yellow' }),
      1000
    );
  };
  componentWillUnmount = () => {
    clearTimeout(this.timer);
  };
  componentDidUpdate(prevProps, prevState) {
    const el = document.getElementById('samer');
    el.textContent =
      'The updated favorite color is ' + this.state.favoriteColor;
  }
  render() {
    return (
      <>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id='samer'></div>
      </>
    );
  }
}

export default LifeCycleMethods;

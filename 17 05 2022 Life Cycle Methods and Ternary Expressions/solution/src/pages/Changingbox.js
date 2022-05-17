import React from 'react';
import './styles.css';

class Box extends React.Component {
  state = { change: false, circle: false };

  componentDidMount = () => {
    setInterval(() => this.setState({ change: !this.state.change }), 500);
    setTimeout(() => this.setState({ circle: true }), 2501);
  };

  render() {
    return (
      <div
        style={{
          width: this.props.width,
          height: this.props.width,
          backgroundColor: this.state.change ? 'red' : 'green',
          borderRadius: this.state.circle ? '50%' : '0%',
        }}
      ></div>
    );
  }
}
class Changingbox extends React.Component {
  state = { favoriteColor: 'green' };
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '50vh',
          textAlign: 'center',
        }}
      >
        <Box width='200px' />
      </div>
    );
  }
}

export default Changingbox;

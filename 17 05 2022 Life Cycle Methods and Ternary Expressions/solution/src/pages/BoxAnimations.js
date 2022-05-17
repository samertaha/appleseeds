import React from 'react';
import './styles.css';

class Box extends React.Component {
  state = { slide: false };

  componentDidMount = () => {
    this.timer = setTimeout(() => this.setState({ slide: true }), 1000);
    this.timer = setTimeout(() => this.setState({ slide: false }), 4000);
  };

  render() {
    return (
      <div
        className={this.props.slide ? 'In' : 'Out'}
        style={{
          position: 'absolute',
          width: this.props.width,
          height: this.props.width,
          backgroundColor: 'red',
          top: this.props.width * 3,
          //   left: '-' + this.props.width,
        }}
      ></div>
    );
  }
}
class BoxAnimations extends React.Component {
  state = { favoriteColor: 'green' };
  render() {
    return (
      <div style={{ width: '100%', height: '50vh', position: 'relative' }}>
        <Box width={20} />
        <Box width={40} />
        <Box width={60} />
      </div>
    );
  }
}

export default BoxAnimations;

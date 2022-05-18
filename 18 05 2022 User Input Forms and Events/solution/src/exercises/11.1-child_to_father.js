import React from 'react';

const Child = class extends React.Component {
  state = { color: '' };

  componentDidMount() {
    this.setState((prevState, nextState) => {
      return { color: nextState.color };
    });
  }
  render() {
    return (
      <button
        style={{ backgroundColor: this.props.color, width: '100px' }}
        onClick={() => {
          this.props.handleClick(this.state.color);
        }}
      >
        {this.props.color}
      </button>
    );
  }
};

const Father = class extends React.Component {
  state = { colors: ['blue', 'red', 'yellow'], selected: '' };

  handleClick = (color) => {
    console.log(color);
    this.setState({
      selected: color,
    });
  };
  render() {
    return (
      <div>
        {this.state.colors.map((color) => {
          return (
            <Child key={color} color={color} handleClick={this.handleClick} />
          );
        })}
        <h1>The color selected is:{this.state.selected}</h1>
      </div>
    );
  }
};

export default Father;

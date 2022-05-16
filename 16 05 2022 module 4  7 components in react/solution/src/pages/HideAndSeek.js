import React from 'react';

class HideAndSeek extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressed: false };
  }
  render() {
    return (
      <div className='card' style={{ width: '20rem', height: '20rem' }}>
        <button
          onClick={() => {
            this.setState({ pressed: !this.state.pressed });
          }}
        >
          Hide/Show
        </button>

        {this.state.pressed && (
          <div
            className='card'
            style={{
              width: '10rem',
              height: '10rem',
              backgroundColor: 'yellow',
            }}
          ></div>
        )}
      </div>
    );
  }
}

export default HideAndSeek;

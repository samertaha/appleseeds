import React from 'react';
import './styles.css';

const Spinner1 = () => <div className='loader'></div>;

class Spinner extends React.Component {
  state = { spinner: false };
  componentDidMount = () => {
    this.setState({ spinner: true });
    setTimeout(() => this.setState({ spinner: false }), 5000);
  };

  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '50vh',
          textAlign: 'center',
        }}
      >
        {this.state.spinner && <Spinner1 />}
      </div>
    );
  }
}

export default Spinner;

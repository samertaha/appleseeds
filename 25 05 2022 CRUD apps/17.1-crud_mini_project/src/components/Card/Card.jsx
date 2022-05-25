// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import React from 'react';

class App extends React.Component {
  state = { avatars: [] };

  componentDidMount() {}

  render() {
    const { id, avatarName, imgUrl } = this.props;
    return (
      <div key={id} className='Card'>
        <h5>{avatarName}</h5>
        <img src={imgUrl} alt={avatarName} />
        <div style={{ display: 'flex' }}>
          <button type='button' onClick={() => this.props.pressEditBtn(id)}>
            Edit
          </button>
          <button type='button' onClick={() => this.props.pressDeleteBtn(id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default App;

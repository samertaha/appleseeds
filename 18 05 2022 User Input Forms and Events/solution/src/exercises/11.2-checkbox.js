import React from 'react';

const Child = class extends React.Component {
  render() {
    return <input type='checkbox' checked={this.props.checked} readOnly />;
  }
};

const Checkboxes = class extends React.Component {
  render() {
    return (
      <div>
        <Child checked={false} />
        <Child checked={false} />
        <Child checked={true} />
        <Child checked={true} />
      </div>
    );
  }
};

export default Checkboxes;

import React from 'react';

export class Focus extends React.Component {
  componentDidMount() {
    this.shaulButton.focus();
    this.nameInput.value = 'will focus by value';
  }
  render() {
    return (
      <div>
        <input defaultValue="Won't focus" />
        <input
          ref={(pointer) => {
            this.nameInput = pointer;
          }}
          defaultValue='will focus'
        />
        <button
          type='button'
          ref={(button) => {
            this.samerButton = button;
          }}
        >
          Samer
        </button>
        <button
          type='button'
          ref={(button) => {
            this.shaulButton = button;
          }}
        >
          Shaul
        </button>
      </div>
    );
  }
}

export const SomkeComp = () => {
  return <div>some great component</div>;
};

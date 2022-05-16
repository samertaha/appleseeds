import React from 'react';

const Button = ({ style, text }) => {
  console.log(style);
  return <button style={style}>{text}</button>;
};

const Buttons = () => {
  const style = { fontWeight: 'bold' };
  return (
    <>
      <h1>Buttons</h1>
      <Button style={style} text={'Important'} />
      <Button text={'Not Important'} />
    </>
  );
};

export default Buttons;

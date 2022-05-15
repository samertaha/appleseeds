import logo from './logo.svg';
import './App.css';

function App() {
  const data = ['hello', 'world'];
  const number1 = 5;
  const number2 = 6;
  const string = 'I love React!';

  return (
    <>
      <h1>{`${data[0]} ${data[1]}`}</h1>
      <h1>{`${number1} + ${number2} = 11`}</h1>
      <h1>{`The string’s length of "${string}" is ${string.length}`}</h1>
    </>
  );
}

export default App;

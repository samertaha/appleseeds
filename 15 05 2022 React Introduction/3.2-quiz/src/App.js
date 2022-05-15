import './App.css';
//Quiz, QuizTitle, Q1, Q1Title, Q1Input, Q2, Q2Title, Q2Input
function Quiz() {
  return (
    <div className='Quiz'>
      <QuizTitle />
      <Q1 />
      <Q2 />
    </div>
  );
}
function QuizTitle() {
  return <h1 className='QuizTitle'>How Do You Like FrontEnd?</h1>;
}
function Q1() {
  return (
    <div>
      <Q1Title />
      <Q1Input />
    </div>
  );
}
function Q1Title() {
  return <h2 className='Q1'>How Much you love front end?</h2>;
}
function Q1Input() {
  return <input type='range' min='1' max='3' step='1' value='2' />;
}

function Q2() {
  return (
    <div>
      <Q2Title />
      <Q2Input />
    </div>
  );
}
function Q2Title() {
  return (
    <h2 className='Q1'>What is your favourite front end feature/topic?</h2>
  );
}
function Q2Input() {
  return <input type='input' min='1' max='3' step='1' value='2'></input>;
}

function App() {
  return (
    <>
      <Quiz />
    </>
  );
}

export default App;

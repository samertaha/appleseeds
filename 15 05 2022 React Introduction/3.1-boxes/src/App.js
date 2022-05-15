import logo from './logo.svg';
import './App.css';

//green
function Box1({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'green',
        width: '200px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
      }}
    >
      {children}
    </div>
  );
}
//blue
function Box2({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'blue',
        width: '150px',
        height: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
      }}
    >
      {children}
    </div>
  );
}
//pink
function Box3({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'pink',
        width: '100px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '5px',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
}
//purple
function Box4() {
  return (
    <div
      style={{
        backgroundColor: 'purple',
        width: '50px',
        height: '50px',
        margin: '2px',
        marginTop: '5px',
        flex: 1,
      }}
    ></div>
  );
}
function App() {
  return (
    <Box1>
      <Box2>
        <Box3>
          <Box4 />
          <Box4 />
        </Box3>
      </Box2>
    </Box1>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import BlueBox from './components/Box/Box';



const example = () => {
  if (true) {
    return (
      <div>HEYYYYYYY</div>
    )
  } else {
    return (
      <div>bye</div>
    )
  }
}

const a = 5;
var buttonClicked = false;

const fruits = ['apple', 'banana', 'orange'];

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      {console.log('lol')}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hi</p>
        <h1>{counter}</h1>
        <example />
        {/* <p>{a}</p> */}
        {/* <BlueBox name="Suraj" lastName="Rao" /> */}
        {/* <BlueBox name="Sarah" /> */}
        {/* {fruits.map((fruit, a) => {
            return (<div><div>{fruit}</div>
            <div>{a}</div></div>)
          })} */}
        {/* {buttonClicked && <div>hi</div>} */}
        {/* {buttonClicked ? <div>hi</div> : <div>bye</div>} */}
        {/* {example()} */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setCounter(counter+1)}>Click me</button>
      </header>
    </div>
  );
}

export default App;

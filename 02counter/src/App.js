 import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
 
  const [counter, helloCounter] = useState(23);
  // const [counter, setCounter] = useState(23);

  // let counter = 23;
  function addValue() {
    console.log('value added: ', counter);
    // counter += 1
    // helloCounter(counter)
    helloCounter(counter + 1)
  }

  const removeValue = () => {
    console.log('Value remove:' ,counter)
    if (counter > 0){
      helloCounter(counter - 1)
    }
  }
  return (
    <>
    <h1>Hello React and js Tutorial</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add value{counter}</button><br></br>
    <button onClick={removeValue}>Remove value{counter}</button>
    <footer>The value is {counter}</footer>
    </>
  );
}

export default App;
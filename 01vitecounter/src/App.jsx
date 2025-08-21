
import { useState } from 'react';
import './App.css'

function App() {




  const [counter,setCounter]=useState(4);

  const addValue = () =>{
   setCounter(counter+1);
    console.log("value added "+ counter)
  }

 
  const decreaseValue = () =>{
    if(counter>0){
    setCounter(counter-1);
    }
 
    console.log("value added "+ counter)
  }

  return (
    <>
    <h2>Chai or React</h2>
    <h3>Counter: {counter}</h3>
    <button onClick={addValue}>Add value</button> <br/>
    <br/>
    <button onClick={decreaseValue}>Decrease value </button>
    </>
  )
}

export default App

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <Nayoks name="Faisal Ahmed"></Nayoks>
        <Nayoks name="Sakibul"></Nayoks>
        <Nayoks  name="Azhar"></Nayoks>
        <Nayoks></Nayoks>
      </header>
      
    </div>
  );
}
function Nayoks(props) {
  const nayokss =['Jasim','Jafor','Elias' ];
  const nayokStyle={
    border: "2px solid red",
    margin:"5px",
    width:"400px"

  }
  
  return (
    <div style={nayokStyle} >
      <h2>Developer name:{props.name}</h2>
    
    </div>
    
  ) 
}
function Counter() {
  const [count, setCount]= useState(0);

  return(
    <div>
      
      <button onClick={() =>setCount(count + 1) }>Increase</button>
      <button onClick={() =>setCount(count - 1) }>Decrease</button>
      <h3>Counter: {count}</h3>
      <DisplayCounter counts={count + 1}></DisplayCounter>
      <DisplayCounter counts={count + 2}></DisplayCounter>
      <DisplayCounter counts={count + 3}></DisplayCounter>
      <DisplayCounter counts={count + 5}></DisplayCounter>
    </div>
  )
  
}
function DisplayCounter(props){
  return (
    <div>
      <h2>I can display Counter: {props.counts}</h2>
    </div>
  )
}

export default App;

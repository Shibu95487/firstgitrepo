import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  let count=0;
  const [count,setcount]=usestate(0);

function decresehandler(){
    setCount=count-1;
}

function increasehandler(){
  setCount=count+1;
}
function resethandler(){
  setCount=0;
}

  return (
    <div className="w-[100vw] h-[100vw] flex justify-center item-center bg[#344151] flex-col gap-10">
      <div>
      Increment And Decrement
      </div>
      <div>
        <button onclick={decresehandler}>+</button>
        <button>{count}</button>
        <button onclick={increaseehandler}>-</button>
    </div>
    <button onclick={resethandler}>
      Reset
    </button>
    </div>
  );
}

export default App;

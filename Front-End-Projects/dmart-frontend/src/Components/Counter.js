import React, { useState } from "react"
import '../assets/styles/counter.css'
const Counter = () => {
    const [state, setState] = useState(0);
    const increment = () => {
        setState(state + 1);
    }
    const decrement = () => {
        if(state > 0) {
        setState(state - 1);
        }
    }

    const multiply = () => {
        setState(state *2);
    }

    const module = () => {
        setState(state / 2);
    }

    const remainder = () => {
        setState(state % 2);
    }

    const reset = () => {
        setState(0);
    }
  return (
    <div className="counter-container">
      <h1>Count:</h1>
      <h2>{state}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={module}>Module</button>
      <button onClick={remainder}>Remainder</button>
      <button onClick={reset}>Reset</button>

    </div>
  )
}

export default Counter

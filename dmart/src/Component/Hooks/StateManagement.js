import "../styles.css";
import {useState} from "react"


let StateManagement = () => {
    let [state, setState] = useState(0);

let increment = () => {  // 0 + 1  = 1, 1 + 1 = 2, 2 + 1 = 3, 3 + 1 = 4, 4 + 1 = 5
    setState(state + 1);
}

let decrement = () => { // 0 -1 = -1, 1 - 1 = 0, 2 - 1 = 1, 3 - 1 = 2, 4 - 1 = 3, 5 - 1 = 4
    setState(state - 1); 
}

let multiply = () => { // 0 * 2 = 0, 1 * 2 = 2, 2 * 2 = 4, 3 * 2 = 6, 4 * 2 = 8, 5 * 2 = 10
    setState(state * 2);
}

let divide = () => { // 0 / 2 = 0, 1 / 2 = 0.5, 2 / 2 = 1, 3 / 2 = 1.5, 4 / 2 = 2, 5 / 2 = 2.5 
    setState(state / 2);
}

let reset = () => {
  setState(0); 
}


  return (
    <div className="train-info">
      <h1>State Management Count : </h1>
        <h2>{state}</h2>

            <button className="btn btn-primary" onClick={increment}>increment</button>
            <button className="btn btn-secondary" onClick={decrement}>decrement</button>
            <button className="btn btn-success" onClick={multiply}>multiply</button>
            <button className="btn btn-danger" onClick={divide}>divide</button>
            <button className="btn btn-warning"  onClick={reset}>Reset</button>
            
            
    </div>
  );
};

export default StateManagement;


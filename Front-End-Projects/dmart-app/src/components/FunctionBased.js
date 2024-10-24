import React from 'react'
import { useState } from 'react'
function FunctionBased() {
    const[state, setState] = useState({
         trainInfo:"Morning Function express at 8:00 AM"
    })
    let handleChageTrainInfo = () => {
        setState({
            trainInfo:"Evening Function express at 6:00 PM"
        })
    }
  return (
    <div>
      <h1>Function Based</h1>
      <h2>{state.trainInfo}</h2>
      <button onClick={handleChageTrainInfo}>Train Update</button>
    </div>
  )
}

export default FunctionBased

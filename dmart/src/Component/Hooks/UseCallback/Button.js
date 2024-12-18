import React from 'react'

const Button = (props) => {
    // console.log(`This is Button component ${props.handleClick}`)
    console.log(`This is Button component ${props.children}`)


  return (
    <div>
        <button onClick={props.handleClick}>{props.children}</button>
    </div>
  )
}

export default React.memo(Button)
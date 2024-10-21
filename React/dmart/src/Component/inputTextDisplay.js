import React, { useState } from 'react';
import './styles.css';

function TodoApp() {
  const [inputValue, setInputValue] = useState(''); // To store the current input value
  const [todos, setTodos] = useState([]);           // To store the list of todos

  // Handles changes in the input field
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handles submission (either by clicking the button or pressing Enter)
  const handleSubmit = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);  // Add the input value to the list of todos
      setInputValue('');                 // Clear the input field after submission
    }
  };

  // Handles key press for 'Enter'
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();                    // Call the submit function on Enter key press
    }
  };

  return (

    <div className="text-container">

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter a todo"
      />

      <button onClick={handleSubmit}> ADD </button>

      <div>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>       // Display each todo as a new line
        ))}
      </div>

    </div>

  );
}

export default TodoApp;

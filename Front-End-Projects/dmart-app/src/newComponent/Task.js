import React, { useState } from 'react';

const Task = () => {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    if (inputText.trim() !== '') {
      setDisplayText([...displayText, inputText]);
      setInputText('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputText} 
        onChange={handleChange} 
        placeholder="Enter text" 
      />
      <button onClick={handleClick}>Display Text</button>
      
      <div>
        {displayText.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default Task;

import React, { useState} from 'react';


const DisplayInput = () => {

    const [inputText, setInputText] = useState('');
    const [DisplayInput, setDisplayInput] = useState([]);

    const handleInputChange = (e) => {
           setInputText(e.target.value);
    }

    const handleButtonClick = () => {
        setDisplayInput((prevText) => [...prevText, inputText] );
        setInputText('');

    }

    return (
        <div>
            <h1>DisplayInput</h1>
            <input type="text" value={inputText} onChange={handleInputChange} placeholder="Enter your text here" />
            <button onClick={handleButtonClick}>Submit</button>

            <div>
                {DisplayInput.map((text, index) =>(
                  <p key={index}>{text}</p>
                ))}
                
            </div>
        </div>
    )
}

export default DisplayInput;
import React, { useState } from 'react';

function Greet() {
  const [userInput, setUserInput] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleDisplayClick = () => {
    // Concatenate "Hello" with the user input and set it as the displayed text
    setDisplayedText(`Hello, ${userInput}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="user"
        value={userInput}
        onChange={handleInputChange}
      />
      <button onClick={handleDisplayClick}>Display</button>
      <p>{displayedText}</p>
    </div>
  );
}

export default Greet;

import React, { useState } from "react";

const GameInput = ({ onGuess }) => {
  const [guess, setGuess] = useState("");

  const handleInputChange = (e) => {
    setGuess(e.target.value); // Update state with the current input value
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form reload
    const parsedGuess = parseInt(guess, 10);

    // Validate input
    if (isNaN(parsedGuess) || parsedGuess < 1 || parsedGuess > 100) {
      alert("Please enter a valid number between 1 and 100.");
      return;
    }

    onGuess(parsedGuess); // Pass the valid guess back to the parent component
    setGuess(""); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit} className="game-input">
      <input
        type="number"
        value={guess}
        onChange={handleInputChange}
        placeholder="Enter your guess"
        className="input-field"
        min="1"
        max="100"
      />
      <button type="submit" className="submit-button">
        Submit Guess
      </button>
    </form>
  );
};

export default GameInput;

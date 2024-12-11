import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import GameInput from './components/GameInput';
import Feedback from './components/Feedback';

function App() {

  // Our four states
//   randomNumber
// attemptsLeft
// feedbackMessage
// gameStatus (playing, won, lost)
  const randomlyGeneratedNumber = Math.floor(Math.random() * 100);

  const [randomNumber, setRandomNumber] = useState(randomlyGeneratedNumber); //what the default will be
  const [attemptsLeft, setAttemptsLeft] = useState(5);
  const [feedbackMessage, setFeedbackMessage] = useState("")// Number too high, number too low
  const [gameStatus, setGameStatus] = useState("playing"); //Three modes default: playing, won, lost

  const onGuess = (playerGuess) => {
    if(playerGuess > randomNumber){
      setFeedbackMessage("Number is too high.")
    }
    if(playerGuess < randomNumber){
      setFeedbackMessage("Number is too low.")
    }
    if(playerGuess === randomNumber){
      setFeedbackMessage("")
      setGameStatus("winning")
      return
    }
    setAttemptsLeft((prev)=> prev - 1)
    if(attemptsLeft === 0){
      setFeedbackMessage("")
      return setGameStatus("losing");
    }
  }

  return (
    <div className="App">
      <Header/>
      <h3>Attempts left: {attemptsLeft}</h3>
      <GameInput onGuess={onGuess}/>
      <Feedback feedbackMessage={feedbackMessage} gameStatus={gameStatus}/>
    </div>
  );
}

export default App;

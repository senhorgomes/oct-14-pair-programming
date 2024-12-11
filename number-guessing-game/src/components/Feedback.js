function Feedback({feedbackMessage, gameStatus}) {
    return ( 
        <div>
            <h3>{feedbackMessage}</h3>
            {gameStatus === "winning" && <h2>Congratulations you have guessed correctly!</h2>}
            {gameStatus === "losing" && <h2>Better luck next time</h2>}
        </div>
     );
}

export default Feedback;
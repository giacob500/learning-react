import React, { useState, useEffect } from 'react';
import './TabataTimer.css';

function TabataTimer() {
  const [timeLeft, setTimeLeft] = useState(10); // Change to 20 for a typical 20s work interval
  const [isWorkInterval, setIsWorkInterval] = useState(true);
  const [round, setRound] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const totalRounds = 8; // Number of rounds (default is 8 for Tabata)

  useEffect(() => {
    let timer;

    if (isRunning && round <= totalRounds) {
      // Start the timer
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      // When time reaches zero, switch between work/rest intervals
      if (timeLeft === 0) {
        if (isWorkInterval) {
          setTimeLeft(10); // Rest interval (10 seconds)
          setIsWorkInterval(false);
        } else {
          setTimeLeft(20); // Work interval (20 seconds)
          setIsWorkInterval(true);
          setRound((prevRound) => prevRound + 1);
        }
      }
    }

    return () => clearInterval(timer); // Cleanup on component unmount or re-render

  }, [isRunning, timeLeft, isWorkInterval, round, totalRounds]);

  // Start/Stop Button
  const toggleStartStop = () => {
    setIsRunning((prevRunning) => !prevRunning);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Tabata Timer</h1>
      <h2>Round {round}/{totalRounds}</h2>
      <h2>{isWorkInterval ? 'Work!' : 'Rest!'}</h2>
      <h1>{timeLeft} seconds</h1>
      <button className="bn632-hover bn22" onClick={toggleStartStop}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      {round > totalRounds && <h2>Tabata Complete!</h2>}
    </div>
  );
}

export default TabataTimer;

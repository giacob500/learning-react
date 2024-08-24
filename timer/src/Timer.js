import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Start the timer when the component mounts
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
}

export default Timer;

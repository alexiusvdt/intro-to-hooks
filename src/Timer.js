import React, { useState, useEffect } from "react";

function Timer() {
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTimer(timerState => timerState + 1)
      }, 1000
    )}
  
    //cleanup method using js built-in clearInterval
    //only runs when isActive changes thanks to dep. array
  return () => clearInterval(interval);
  }, [isActive]);

  return (
    <React.Fragment>
      {isActive ? <h1>{timer}</h1> : <h1>Timer Stopped</h1>}
      <button onClick={() => setIsActive(!isActive)}>Start/Stop</button>
    </React.Fragment>
  );
}

export default Timer;
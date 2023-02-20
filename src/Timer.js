import React, { useState, useEffect } from "react";
import useTimer from './hooks/useTimer';

function Timer(){
  // new!
  // note that we can call these vars whatever we want & reference them here as such
  const [isActive, timer, setIsActive] = useTimer();

  return (
    <React.Fragment>
      {isActive ? <h1>{timer}</h1> : <h1>Timer Stopped</h1>}
      <button onClick={() => setIsActive(!isActive)}>Start/Stop</button>
    </React.Fragment>
  );
}

export default Timer;
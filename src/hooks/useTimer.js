import { useState, useEffect } from 'react';

function useTimer() {
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


// now that our hook is separated out, we have to return something, otherwise our components cant render
// dont forget to declare these as const in the component!
  return [isActive, timer, setIsActive];
}


export default useTimer;
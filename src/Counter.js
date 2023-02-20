import React, { useState, useEffect } from 'react';
//array destructured into 2 values, the state value and a function to set a new state value

function Counter() {
  // state representation, func (always with 'set')
  const [counter, setCounter] = useState(0);
  const [hidden, setHidden] = useState(false);

  // first run after first render, after every re-render
  // takes callback as arg which acts ass effect, calling func every time
  // return: void
  useEffect(()=> {
    console.log("effect!");
    document.title = counter;
  }, [counter]);
  //^ this dependency array says counter only gets re-rendered if counter state changes. clicking show/hide won't force a re-render of that part

  return(
    <React.Fragment>
      {/* call counter using JSX and make an onclick listener/button that triggers set func */}
      {hidden ? <h1>Count Hidden:</h1> : <h1>{counter}</h1>}
      
      <button onClick={() => setCounter(counter +1)}>Count! Ah Ah Ah!</button>
      <button onClick={() => setHidden(!hidden)}>hide/show</button>
    </React.Fragment>
  )
}

export default Counter;
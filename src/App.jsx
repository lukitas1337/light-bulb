// import block on top to import styles, hooks, and components

import { useState } from 'react'
import LightBulb from './Lightbulb'
import './App.css'
import './Style.css'

// component declared as a function, first the logic is defined and afterwards the return

const App = () => {

// useState hook to manage the state of the light bulb, lightIsOn is the state and setLightIsOn is the function to update the state, the initial state is false  
  const [lightIsOn, setLightIsOn] = useState(false);

  // conditional rendering to change the class of the container div, if the state is set to lightIsOn the variable for the class is "container night" otherwise its "container"
  let bulbClass="";
  lightIsOn? bulbClass = "container night" : bulbClass = "container";

  return (
// button to switch the state of lightIsOn to opposite using ! and the LightBulb component with the className stored in the variable bulbClass as a prop

    <>
      <button onClick={() => setLightIsOn(prevLight => !prevLight)} >Switch</button>
      <LightBulb lightState={bulbClass}/>
    </>
  );
};

export default App;
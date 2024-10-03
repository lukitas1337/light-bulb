import { useState } from 'react'
import LightBulb from './Lightbulb'
import './App.css'
import './Style.css'

const App = () => {
  const [lightIsOn, setLightIsOn] = useState(false);

  let bulbClass="";
  lightIsOn? bulbClass = "container night" : bulbClass = "container";

  return (
    <>
      <button onClick={() => setLightIsOn(prevLight => !prevLight)} >Switch</button>
      <LightBulb lightState={bulbClass}/>
    </>
  );
};

export default App;
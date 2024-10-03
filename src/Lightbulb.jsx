// declaring LightBulb component in a const, telling it to receive props and returning the JSX for the light bulb
// accessing props.lightState to change the class of the container div which corresponds with css styles in Style.css "lightState" is coming from the App component and is defined as variable bulbClass which is either "container night" or "container" based on the state of lightIsOn, set in the App component after a click on the button

const LightBulb = (props) => {
    return (
      <div className= {props.lightState}>
        <div className="bulb-light">
          <div id="light" />
          <div id="bulb">
            <div className="bulb-top">
              <div className="reflection" />
            </div>
            <div className="bulb-middle-1" />
            <div className="bulb-middle-2" />
            <div className="bulb-middle-3" />
            <div className="bulb-bottom" />
          </div>
  
          <div id="base">
            <div className="screw-top" />
            <div className="screw-a" />
            <div className="screw-b" />
            <div className="screw-a" />
            <div className="screw-b" />
            <div className="screw-a" />
            <div className="screw-b" />
            <div className="screw-c" />
            <div className="screw-d" />
          </div>
        </div>
      </div>
    );
  };

export default LightBulb;
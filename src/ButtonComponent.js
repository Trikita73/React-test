import React from 'react';

function ButtonComponent(props) {
  return (
    <div className="app">
      <button className="button_timer" onClick={props.start}>Start</button>
			<button className="button_timer" onClick={props.stop}>Stop</button>
			<button className="button_timer" onDoubleClick={props.wait}>Wait</button>
			<button className="button_timer" onClick={props.reset}>Reset</button>
    </div>
  );
} 

export default ButtonComponent;
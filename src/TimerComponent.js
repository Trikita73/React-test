import React from 'react';

function TimerComponent(props) {
  return (
    <div className="timer_display">
      <span className="timer_numb">{(props.time.hh >=10)? props.time.hh : "0" + props.time.hh}</span>&nbsp;:&nbsp;
			<span className="timer_numb">{(props.time.mm >=10)? props.time.mm : "0" + props.time.mm}</span>&nbsp;:&nbsp;
			<span className="timer_numb">{(props.time.ss >=10)? props.time.ss : "0" + props.time.ss}</span>
    </div>
  );
}

export default TimerComponent;
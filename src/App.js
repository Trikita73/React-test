import React, {useState} from 'react';
import './App.css';

function App() {
	const [time, setTime] = useState({ms:0, ss:0, mm:0, hh:0});
	const [interv, setInterv] = useState();
	const [status, setStatus] = useState(0);

	const start = () => {
		run();
		setInterv(setInterval(run, 10));
	};

	let updatedMS = time.ms, updatedSS = time.ss, updatedMM = time.mm, updatedHH = time.hh;
	
	const run = () => {
		if(updatedMM === 60) {
			updatedHH++;
			updatedMM = 0;
		}
		if(updatedSS === 60) {
			updatedMM++;
			updatedSS = 0;
		}
		if(updatedMS === 100) {
			updatedSS++;
			updatedMS = 0;
		}

		updatedMS++ 
		return setTime({ms:updatedMS, ss:updatedSS, mm:updatedMM, hh:updatedHH});
	};


	const stop = () => {
		clearInterval(interv);
		setTime({ms:0, ss:0, mm:0, hh:0});
	};

	const wait = () => {
		clearInterval(interv);
		run();
	};

	const reset = () => {
		clearInterval(interv);
    setTime({ms:0, ss:0, mm:0, hh:0});
		setInterval (0);
	};

  return (
    <div className="app">
      <div className="app_timer">
				<div className="display_timer">
					<TimerComponent time={time}/>
					<ButtonComponent status={status} stop={stop} wait={wait} reset={reset} start={start}/>
				</div>
      </div>
    </div>
  );
}



export default App;

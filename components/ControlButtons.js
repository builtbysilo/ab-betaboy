import React from "react";
import { useTime, useUpdateTime} from './GameBoy/timerContext'

export default function ControlButtons(props) {


const {handleStart, handlePauseResume, handleReset}  = useUpdateTime()

const context = useTime();

const [isPaused, setIsPaused] = context['paused'];
const [isActive, setIsActive] = context['active'];

const StartButton = (
	<div className="btn btn-one btn-start"
	onClick={() => handleStart()}>
	Start
	</div>
);
const ActiveButtons = (
	<div className="btn-grp">
	<div className="btn btn-two"
		onClick={() => handleReset()}>
		Reset
	</div>
	<div className="btn btn-one"
		onClick={() => handlePauseResume()}>
		{isPaused ? "Resume" : "Pause"}
	</div>
	</div>
);

return (
	<div className="Control-Buttons">
	<div>{isActive ? ActiveButtons : StartButton}</div>
	</div>
);
}

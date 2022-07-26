import React from "react";
import { useTime, useUpdateTime} from './GameBoy/timerContext'


export default function Timer(props) {

const {handleStart, handlePauseResume, handleReset}  = useUpdateTime()

const context = useTime();

const [isPaused, setIsPaused] = context['paused'];
const [isActive, setIsActive] = context['active'];
return (
	<div className="timer">
	<span className="digits">
		{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
	</span>
	<span className="digits">
		{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
	</span>
	<span className="digits mili-sec">
		{("0" + ((props.time / 10) % 100)).slice(-2)}
	</span>
	</div>
);
}

import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";
import { useTime, useUpdateTime} from './GameBoy/timerContext'



export default function StopWatch() {

const {handleStart, handlePauseResume, handleReset}  = useUpdateTime()

const context = useTime();

const [isPaused, setIsPaused] = context['paused'];
const [isActive, setIsActive] = context['active'];
const [time, setTime] = context['time'];


useEffect(() => {
	let interval = null;

	if (isActive && isPaused === false) {
	interval = setInterval(() => {
		setTime((time) => time + 10);
	}, 10);
	} else {
	clearInterval(interval);
	}
	return () => {
	clearInterval(interval);
	};
}, [isActive, isPaused]);



return (
	<div className="stop-watch">
	<Timer time={time} />
	{/* <ControlButtons
		active={isActive}
		isPaused={isPaused}
		handleStart={handleStart}
		handlePauseResume={handlePauseResume}
		handleReset={handleReset}
	/> */}
	</div>
);
}


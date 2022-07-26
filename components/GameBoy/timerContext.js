import React, { useState, createContext, useContext } from 'react';

const TimeContext = createContext()
const UpdateTimeContext = createContext()

export function useTime() {
    return useContext(TimeContext)
}

export function useUpdateTime() {
    return useContext(UpdateTimeContext)
}

export function TimeProvider({ children }) {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };


    const states = {
        'active':[isActive, setIsActive],
        'paused':[isPaused, setIsPaused],
        'time':[time, setTime],
    }
    const value = {handleStart, handlePauseResume, handleReset}


    return (
        <TimeContext.Provider value={states}>
            <UpdateTimeContext.Provider value={value}>
                {children}
            </UpdateTimeContext.Provider>
        </TimeContext.Provider>
    )

}



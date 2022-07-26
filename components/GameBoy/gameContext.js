import React, { useState, createContext, useContext } from 'react';

const GameContext = createContext()
const UpdateGameContext = createContext()

export function useGame() {
    return useContext(GameContext)
}

export function useUpdateGame() {
    return useContext(UpdateGameContext)
}

export function GameProvider({ children }) {
    const [popUp, setPopUp] = useState(1)
    const [lvl, setLvl] = useState(1)

    const toggleStart = () => {
        setPopUp(1)
    }

    const toggleGameOver = () => {
        setPopUp(2)
        setLvl(1)
    }

    const toggleWin = () => {
        setPopUp(3)
    }

    const toggleSubmit = () => {
        setPopUp(4)
    }

    const toggleLeaderBoards = () => {
        setPopUp(5)
    }

    const nextLevel = () => {
        setLvl(lvl + 1)
    }

    const resetLevel = () => {
        setLvl(1)
    }

    // const toggleStart = () => {
    //     setStartGame(current => !current)
    // }


    const states = {
        'lvls':[lvl, setLvl],
        'popups':[popUp, setPopUp],
    }
    const value = {toggleStart, toggleGameOver, toggleWin, toggleSubmit, nextLevel, resetLevel }


    return (
        <GameContext.Provider value={states}>
            <UpdateGameContext.Provider value={value}>
                {children}
            </UpdateGameContext.Provider>
        </GameContext.Provider>
    )

}



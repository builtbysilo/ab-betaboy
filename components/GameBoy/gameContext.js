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
    const [lvlActive, setLvlActive] = useState(true);

    const toggleStart = () => {
        setPopUp(1)
    }

    const toggleGameOver = () => {
        setPopUp(2)
        setLvl(1)
    }

    const toggleWin = () => {
        setPopUp(3)
        console.log(popUp)
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

    const toggleActive = () => {
        setLvlActive(false);
        console.log(lvlActive)
    }

    // const toggleStart = () => {
    //     setStartGame(current => !current)
    // }


    const states = {
        'lvls':[lvl, setLvl],
        'popups':[popUp, setPopUp],
        'lvlActive': [lvlActive, setLvlActive]
    }
    const value = {
        toggleStart,
        toggleGameOver,
        toggleWin,
        toggleSubmit,
        nextLevel,
        resetLevel,
        toggleActive
    }




    return (
        <GameContext.Provider value={states}>
            <UpdateGameContext.Provider value={value}>
                {children}
            </UpdateGameContext.Provider>
        </GameContext.Provider>
    )

}



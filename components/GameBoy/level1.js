import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Level1Map from './level1Map'
import PopUpStart from './popupStart'
import PopUpGameOver from './popupGameOver'
import PopUpNextLvl from './popupNextLvl'
import PopUpLeaderBoard from './popupLeaderBoard'

import { useGame, useUpdateGame} from './gameContext'

export default function Level1() {

    // const startGame = useGame()
    // const nextLvl = useGame()

    const context = useGame();

    const [popUp, setPopUp] = context['popups'];

    const puStartMsg = 'The Merchants of Valor have gotten inside the Outpost and there is no time to escape. Get each of our AlphaBots to safety in hopes of surviving the invasion!';

    const winnerAB = 'Rade';
    const nextAB = 'Zeek';

    return (
    <>
    {popUp == 1 &&
        <PopUpStart msg={puStartMsg} />
    }
    {popUp == 2 &&
        <PopUpGameOver />
    }
    {popUp == 3 &&
        <PopUpNextLvl winner={winnerAB} next={nextAB} lvl='2' />
    }
    {popUp == 5 &&
        <PopUpLeaderBoard/>
    }
    {popUp == 0 &&
        <Level1Map />
    }
    </>

    )
}


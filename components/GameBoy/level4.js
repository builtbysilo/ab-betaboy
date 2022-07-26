import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Level4Map from './level4Map'
import PopUpStart from './popupStart'
import PopUpGameOver from './popupGameOver'
import PopUpSubmitScore from './popupSubmitScore'

import { useGame, useUpdateGame} from './gameContext'

export default function Level1() {

    // const startGame = useGame()
    // const nextLvl = useGame()

    const context = useGame();

    const [popUp, setPopUp] = context['popups'];

    const puStartMsg = 'The Merchants of Valor have gotten inside the Outpost and there is no time to escape. Get each of our AlphaBots to safety in hopes of surviving the invasion!';

    const winnerAB = 'Forah';
    const nextAB = 'Theodore';

    return (
    <>
    {popUp == 1 &&
        <PopUpStart msg={puStartMsg} />
    }
    {popUp == 2 &&
        <PopUpGameOver />
    }
    {popUp == 4 &&
        <PopUpSubmitScore />
    }
    {popUp == 0 &&
        <Level4Map />
    }
    </>

    )
}


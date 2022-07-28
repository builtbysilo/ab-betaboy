import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useGame, useUpdateGame} from './gameContext'
import { useTime, useUpdateTime} from './timerContext'



export default function PopUpNextLvl(props) {



const context = useGame();

const [lvl, setLvl] = context['lvls'];
const [popUp,setPopUp] = context['popups'];

const {handleStart, handlePauseResume, handleReset}  = useUpdateTime()

return (

<div id="popup" className="popup">
<div className="pu-con">
    <Image className="board-img" width="100px" height="100px" src="/TrophyIcon.png" alt="Level Won" />
    <p>{props.winner} is safe! <br></br> Now let's help {props.next} hide.</p>
    <button className="play-button" onClick={() => {setLvl(lvl + 1); setPopUp(0); handlePauseResume() }}>
                {/* <Image width="20px" height="20px" className="twitter-icon" src="/Twitter-Icon.png" alt="Twitter" /> */}
                NEXT LEVEL
    </button>
</div>
<Image className="board-img" width="600px" height="600px" src="/PopUpBG.jpg" alt="AlphaBots Level 1" />

</div>
)
}


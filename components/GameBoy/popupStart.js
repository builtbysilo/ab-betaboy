import Image from 'next/image';
import React, { useEffect, useState } from 'react';



export default function PopUpStart(props) {


return (

    <div id="popup" className="popup">
        <Image className="board-img" width="600px" height="600px" src="/TrophyIcon.png" alt="AlphaBots Level 1" />
        <button onClick={props.toggleStart}>Start Game</button>
    </div>
)
}


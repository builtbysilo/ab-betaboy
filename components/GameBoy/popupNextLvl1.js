import Image from 'next/image';
import React, { useEffect, useState } from 'react';


export default function PopUpNextLvl1(props) {


return (

    <div id="popup" className="popup">
        <Image className="board-img" width="600px" height="600px" src="/Skull-Icon.png" alt="AlphaBots Level 1" />
        <button onClick={props.toggleNextLvl}>Next Level</button>
    </div>
)
}


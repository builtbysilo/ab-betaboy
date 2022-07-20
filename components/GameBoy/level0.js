import Image from 'next/image';
import React, { useEffect, useState } from 'react';



export default function Level0() {

    const [gameover, setgameover] = useState(false)



return (

    <div id="level" className="level">
         {gameover? <Image className="board-img" width="600px" height="600px" src="/MAP_LVL_04.gif" alt="AlphaBots Level 1" />
: null}
        <Image className="board-img" width="600px" height="600px" src="/MAP_LVL_01.gif" alt="AlphaBots Level 1" />
    </div>
)
}


import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Level1Map from './level1Map'
import PopUpStart from './popupStart'
import PopUpNextLvl1 from './popupNextLvl1'



export default function Level1() {

    const [gameover, setgameover] = useState(true)
    const [nextLvl, setnextLvl] = useState(false)

    const toggleStart = () => {
        setgameover(current => !current)
    }

    const toggleNextLvl = () => {
        setnextLvl(current => !current)
    }


return (
<>
    {gameover? <PopUpStart toggleStart={toggleStart}/>:<Level1Map toggleNextLvl={toggleNextLvl}/>}
    {nextLvl? <PopUpNextLvl1/>:null}
</>

)
}


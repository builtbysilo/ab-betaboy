import StopWatch from '../StopWatch'
import React, { useEffect, useState } from 'react';
import Level0 from '../GameBoy/level0';
import Level1 from '../GameBoy/level1';
import Level2 from '../GameBoy/level2';
import Level3 from '../GameBoy/level3';
import Level4 from '../GameBoy/level4';



export default function Screen() {
    const [Lvl0, setLvl0] = useState(false)
    const [Lvl1, setLvl1] = useState(true)
    const [Lvl2, setLvl2] = useState(false)
    const [Lvl3, setLvl3] = useState(false)
    const [Lvl4, setLvl4] = useState(false)

    const toggleLvl1 = () => {
        setLvl1(current => !current)
        setLvl2(current => !current)
    }



  return (
    <div className="gb-screen started">
        <div className="screen-top">
            <StopWatch/>
        </div>
        <div className="screen-inner">
            {Lvl0? <Level0 />: null}
            {Lvl1? <Level1 toggleLvl1={toggleLvl1} />: null}
            {Lvl2? <Level2 />: null}
            {Lvl3? <Level3 />: null}
            {Lvl4? <Level4 />: null}
        </div>
    </div>
  )
}


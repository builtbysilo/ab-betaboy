import StopWatch from '../StopWatch'
import React, { useEffect, useState } from 'react';
import Level0 from '../GameBoy/level0';
import Level1 from '../GameBoy/level1';
import Level2 from '../GameBoy/level2';
import Level3 from '../GameBoy/level3';
import Level4 from '../GameBoy/level4';

import { useGame, useUpdateGame} from './gameContext'


export default function Screen() {

    const context = useGame();

    const [lvl, setLvl] = context['lvls'];


    return (
        <div className="gb-screen started">
            <div className="screen-top">
                <div className="music">
                    <a href="https://linktr.ee/prodbydairy" target="_blank">MUSIC BY: DARIUSH DANOWSKI</a>
                </div>
            </div>
            <div className="screen-inner">
                {lvl == 1 &&
                    <Level1 />
                }
                {lvl == 2 &&
                    <Level2 />
                }
                {lvl == 3 &&
                    <Level3 />
                }
                {lvl == 4 &&
                    <Level4 />
                }
            </div>
        </div>
    )
}


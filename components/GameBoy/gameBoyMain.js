import Image from 'next/image';
import React, { useEffect } from 'react';
import TopBar from './topBar'
import Screen from './screen'
import Controls from './controls'


export default function GameBoyMain() {


  return (
    <div className="gb">
            <TopBar/>
            <Screen/>
            <div className="logo">
                <Image src="/BetaBoyLogo.svg" className="betaboylogo" alt="Decentel BetaBoy" width="200px" height="25px"/>
            </div>
            <Controls/>
    </div>
  )
}


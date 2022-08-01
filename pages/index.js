import Head from 'next/head';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { withPublic } from "../firebase/Route"
import WriteToCloudFirestore from "../firebase/Write"
import ReadToCloudFirestore from "../firebase/Read"
import StopWatch from '@components/StopWatch';
import TopBarAlt from '@components/GameBoy/topBarAlt'
import Screen from '@components/GameBoy/screen'
import Controls from '@components/GameBoy/controls'
import GameBoyMain from '../components/GameBoy/gameBoyMain'




export default function Home() {

    return (
      <div className="container">
      <Head>
        <title>BetaBoy - Outpost Invaders</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/swz2ypo.css"></link>
      </Head>

      <div className="app">
        <GameBoyMain/>
      </div>
    </div>
    )
  }
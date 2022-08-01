import Head from 'next/head';
import React, { useEffect } from 'react';
import { withProtected } from "../firebase/Route"
import GameBoyMain from '../components/GameBoy/gameBoyMain'



export default function Play() {


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




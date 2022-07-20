import Head from 'next/head';
import React, { useEffect } from 'react';
import { withProtected } from "../firebase/Route"
import GameBoyMain from '../components/GameBoy/gameBoyMain'



function Play({ auth }) {


const { user, loginWithTwitter, logout, error } = auth;

  return (
    <div className="container">
    <Head>
      <title>BetaBoy Emulator</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/swz2ypo.css"></link>
    </Head>

    <div className="app">
      <GameBoyMain/>
    </div>
  </div>
  )
}

export default withProtected(Play);


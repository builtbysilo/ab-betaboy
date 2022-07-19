import Head from 'next/head';
import React, { useEffect } from 'react';
import Image from 'next/image';
import useAuth from '../firebase/Auth';
import { withPublic } from "../firebase/Route"


function Home({ auth }) {




const { user, loginWithTwitter, logout, error } = auth;

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/swz2ypo.css"></link>
      </Head>

      <div className="app">
        <div className="gb">
            <div className="gb-bar"></div>
            <h1>{user?.displayName}</h1>
            {error && <h1>{error}</h1>}
            <button onClick={loginWithTwitter}>Loginn</button>
            <button onClick={logout}>Logout</button>
            <div className="timer">
              <button id="button-start">Startt</button>
              <button id="button-stop">Stop</button>
              <button id="button-reset">Reset</button>
            </div>
            <div className="gb-screen started">
                <div className="screen-top">
                <p><span id="minutes">00</span>:<span id="seconds">00</span>:<span id="tens">00</span></p>
                </div>
                <div className="screen-inner">
                    <div id="level" className="level">
                        <Image className="board-img" width="600px" height="600px" src="/Level1_GameMap.gif" alt="AlphaBots Level 1" />
                    </div>
                </div>
            </div>
            <div className="logo">
                <Image src="/BetaBoyLogo.svg" alt="Decentel BetaBoy" width="200px" height="25px"/>
            </div>
            <div className="controls">
            <section className="gb-dpad">
                <div className="touchcon">
                    <div className="touchup" id="touchup"></div>
                    <div className="touchdown" id="touchdown"></div>
                </div>
                <div className="dpad-inner" role="button">
                    <img src="/UpDownSprite.png" className="updownimg"/>
                </div>


            </section>
            <section className="gb-buttons">
            <div className="touchcon horizontal">
                    <div className="touchleft" id="touchleft"></div>
                    <div className="touchright" id="touchright"></div>
                </div>
                <div className="buttons-inner" role="button">
                    <img src="/LeftRight_Sprite.png" className="leftrightimg"/>
                </div>
            </section>
            </div>
        </div>
</div>
    </div>
  )
}

export default withPublic(Home);
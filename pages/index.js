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

function Home({ auth }) {


const { user, loginWithTwitter, logout, error } = auth;

  return (
    <div className="container">
      <Head>
        <title>BetaBoy Emulator</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/swz2ypo.css"></link>
      </Head>

      <div className="app">
        <div className="gb">
            <TopBarAlt/>
            <div className="gb-screen started">
                <div className="screen-top">
                <div className="music">
                    <a href="https://linktr.ee/prodbydairy" target="_blank">MUSIC BY: DARIUSH DANAWSKI</a>
                </div>
                </div>
                <div className="screen-inner">
                    <div id="level" className="level">
                    <button className="start-button" onClick={loginWithTwitter}>
                        <Image width="20px" height="20px" className="twitter-icon" src="/Twitter-Icon.png" alt="Twitter" />
                        Connect With Twitter
                    </button>
                        {/* <div className="start-button">
                            <h4>Connect With Twitter</h4>
                        </div> */}
                        <Image className="start-screen" width="600px" height="600px" src="/GameLogo.gif" alt="AlphaBots Level 1" />
                    </div>
                </div>
            </div>
            <div className="logo">
                <Image src="/BetaBoyLogo.svg" className="betaboylogo" alt="Decentel BetaBoy" width="200px" height="25px"/>
            </div>
            <Controls/>
        </div>
</div>
    </div>
  )
}

export default withPublic(Home);
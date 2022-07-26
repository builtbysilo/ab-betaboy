import Head from 'next/head';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { withPublic } from "../firebase/Route"
import WriteToCloudFirestore from "../firebase/Write"
import ReadToCloudFirestore from "../firebase/Read"
import StopWatch from '@components/StopWatch';

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
            <div className="gb-bar"></div>

            <div className="gb-screen started">
                <div className="screen-top">
                <h3>00:12:12</h3>
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
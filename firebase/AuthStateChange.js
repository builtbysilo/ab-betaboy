import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { useEffect, useState } from 'react';
import useAuth from '../firebase/Auth';
import TopBar from '@components/GameBoy/topBar'
import Screen from '@components/GameBoy/screen'
import Controls from '@components/GameBoy/controls'
import Image from 'next/image';


export default function AuthStateChange({children}) {
    const {setUser} = useAuth();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        }),[];


        //eslint-disable-next-line
    });



    if(loading){
        return <div className="container">
        <div className="app">
          <div className="gb">
              {/* <TopBar/> */}
              <div className="gb-screen started">
                  <div className="screen-top">
                  <div className="music">
                      <a href="https://linktr.ee/prodbydairy" target="_blank">MUSIC BY: DARIUSH DANAWSKI</a>
                  </div>
                  </div>
                  <div className="screen-inner">
                      <div id="level" className="level">
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
    }


    return children;
}
import React from 'react';
import useAuth from '../firebase/Auth';
import { useRouter } from "next/router"
import TopBarAlt from '@components/GameBoy/topBarAlt'
import Screen from '@components/GameBoy/screen'
import Controls from '@components/GameBoy/controls'
import Image from 'next/image';

export function withPublic(Component) {
    return function WithPublic(props){
        const auth = useAuth();
        const router = useRouter();

        if(auth.user){
            router.replace("/play")
            return (
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
            )
        }

        return <Component auth={auth} {...props} />;
    }
}

export function withProtected(Component) {
    return function WithProtected(props){
        const auth = useAuth();
        const router = useRouter();

        if(!auth.user){
            router.replace("/")
            return (
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
                )
        }

        return <Component auth={auth} {...props} />;
    }
}
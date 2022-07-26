import '@styles/globals.css';
import AuthStateChange from '../firebase/AuthStateChange';
import {AuthProvider} from "../firebase/Auth";
import {GameProvider} from "../components/GameBoy/gameContext";
import {TimeProvider} from "../components/GameBoy/timerContext";
import "../firebase/firebase.config";


function Application({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AuthStateChange>
        <TimeProvider>
        <GameProvider>
          <Component {...pageProps} />
        </GameProvider>
        </TimeProvider>
      </AuthStateChange>
    </AuthProvider>
  );
}

export default Application

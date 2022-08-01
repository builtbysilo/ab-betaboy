import '@styles/globals.css';
import {GameProvider} from "../components/GameBoy/gameContext";
import {TimeProvider} from "../components/GameBoy/timerContext";
import "../firebase/firebase.config";


function Application({ Component, pageProps }) {
  return (
        <TimeProvider>
        <GameProvider>
          <Component {...pageProps} />
        </GameProvider>
        </TimeProvider>
  );
}

export default Application

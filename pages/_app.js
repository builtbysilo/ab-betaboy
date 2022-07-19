import '@styles/globals.css';
import AuthStateChange from '../firebase/AuthStateChange';
import {AuthProvider} from "../firebase/Auth";
import "../firebase/firebase.config";


function Application({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AuthStateChange>
      <Component {...pageProps} />
      </AuthStateChange>
    </AuthProvider>
  );
}

export default Application

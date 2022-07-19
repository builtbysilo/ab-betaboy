import '@styles/globals.css';
import {AuthProvider} from "../firebase/Auth";
import "../firebase/firebase.config";


function Application({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default Application

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export const AuthService = {
    loginWithTwitter: async() => {
        const provider = new firebase.auth.TwitterAuthProvider();
        try {
            const userCred = await firebase.auth().signInWithPopup(provider);
            return{
                user: userCred.user,
            };
        } catch (e){
            return {
                error: e.message,
            };
        }
    },
    logout: async() => {
        await firebase.auth().signOut();
    }
};
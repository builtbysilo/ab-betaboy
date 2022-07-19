import * as firebase from "firebase/app";
import "firebase/auth";
export const AuthService = {
    loginWithTwitter: async() => {
        const provider = new firebase.auth.TwitterAuthProvider();
        try {
            const userCred = await firebase.auth().signInWithPopUp(provider);
            return{
                user: userCred,
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
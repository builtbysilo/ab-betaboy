import * as firebase from "firebase/app";
import { TwitterAuthProvider } from "firebase/auth";
export const AuthService = {
    loginWithTwitter: async() => {
        const provider = new TwitterAuthProvider();
        try {
            const userCred = await TwitterAuthProvider().signInWithPopUp(provider);
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
        await TwitterAuthProvider().signOut();
    }
};
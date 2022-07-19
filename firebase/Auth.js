import {createContext, useContext, useState} from 'react';
import { AuthService } from '../firebase/AuthService'

const authContext = createContext();

export default function useAuth(){
    return useContext(authContext);
}

export function AuthProvider(props) {
    const {user, setUser} = useState(null);
    const {error, setError} = useState('');

    const loginWithTwitter = async () => {
        const {error, user} = await AuthService.loginWithTwitter();
        setUser(user ?? null);
        setError(error ?? '');
    };

    const logout = async () => {
        await AuthService.logout();
        setUser(null);
    }
    const value = {user,error,loginWithTwitter,logout}

    return <authContext.Provider value={value} {...props} />;
}
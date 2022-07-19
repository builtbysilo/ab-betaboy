import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { useEffect, useState } from 'react';
import useAuth from '../firebase/Auth';

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
        return <h1>Loading</h1>
    }


    return children;
}
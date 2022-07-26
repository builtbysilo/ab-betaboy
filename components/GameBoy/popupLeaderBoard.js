import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useGame, useUpdateGame} from './gameContext'
import { useTime, useUpdateTime} from './timerContext'

import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


export default function PopUpLeaderBoard() {


        const snapshot = firebase.firestore().collection('games').get()
        console.log(snapshot)


        // try {
        //     firebase.firestore().collection('games').doc('test').onSnapshot(function (doc) {
        //         console.log(doc.data())
        //     })
        //     alert('data fetched')
        // } catch (error) {
        //     console.log(error)
        //     alert(error)
        // }



return (

<div id="popup" className="popup">
<div className="pu-con">
    <Image className="board-img" width="100px" height="100px" src="/TrophyIcon.png" alt="Level Won" />
    <p> is safe! Now let's help hide.</p>


</div>
<Image className="board-img" width="600px" height="600px" src="/PopUpBG.jpg" alt="AlphaBots Level 1" />

</div>
)
}


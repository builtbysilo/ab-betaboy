import Image from 'next/image';
import React, { useEffect, useState, useContext } from 'react';
import { useGame, useUpdateGame} from './gameContext'

import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


export default function PopUpLeaderBoard() {

        const [games, setGames] = useState([{player: "Loading...", id: "initial"}]);

        const context = useGame();
        const [popUp,setPopUp] = context['popups'];

        // useEffect(() =>
        //     firebase.firestore().collection('games').orderBy('time').limit(40).onSnapshot((snapshot) => {
        //         setGames(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        //     })
        // ,[]);


return (

<div id="popup" className="popup">
<div className="pu-con">
    {/* <Image className="board-img" width="100px" height="100px" src="/TrophyIcon.png" alt="Level Won" /> */}
    <div className="scores-but">
        <div className="s-but">
            <Image width="50px" height="50px" layout="intrinsic" src="/BackArrow.png" alt="Back" onClick={() => {setPopUp(1)}} />
        </div>
    </div>
    <p>LEADERBOARD</p>
    <div className="board-con">
        <p>Leaderboard Temporarily Unavailable</p>
        {/* {games.map(game => (
            <div className="lb-time-con">
                <div className="lb-name">
                    <h4>{game.player}</h4>
                </div>
                <div className="lb-time">
                    <h4>{game.timeFormated}</h4>
                </div>
            </div>
        ))} */}
    </div>


</div>
<Image className="board-img" width="600px" height="600px" src="/PopUpBG.jpg" alt="AlphaBots Level 1" />

</div>
)
}


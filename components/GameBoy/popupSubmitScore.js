import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useTime, useUpdateTime} from './timerContext'
import WriteToCloudFirestore from '/firebase/Write';


export default function PopUpSubmitScore() {

    const context = useTime();

    const [isPaused, setIsPaused] = context['paused'];
    const [isActive, setIsActive] = context['active'];
    const [time, setTime] = context['time'];

    var minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
    var seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
    var miliseconds = ("0" + ((time / 10) % 100)).slice(-2)

    const timeFormated = minutes + ":" + seconds + ":" + miliseconds

return (

<div id="popup" className="popup">
<div className="pu-con">
    <Image className="board-img" width="100px" height="100px" src="/TrophyIcon.png" alt="Level Won" />
    <p>FINAL TIME:</p>
    <h4>{timeFormated}</h4>
    <p>You did it!</p>
    <p>All AlphaBots haavae successfully avoided the Merchants and are safe.</p>
    <WriteToCloudFirestore/>
</div>
<Image className="board-img" width="600px" height="600px" src="/PopUpBG.jpg" alt="AlphaBots Level 1" />

</div>
)
}


import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react';

export default function PopUpSubmitScore() {

    const [discord, setDiscord] = useState('');

    const discordFormated = discord.replace("#", "%23")

    const discordChange = () => {
        setDiscord(discord.value);
    }



return (

<div id="popup" className="popup">
<div className="pu-con">
    {/* <Image className="board-img" width="100px" height="100px" src="/TrophyIcon.png" alt="Level Won" /> */}
    <h4>You did it!</h4>
    <p>All AlphaBots have successfully avoided the Merchants and are safe.<br></br><br></br>
    Submit your Discord Username below for a chance to a CUSTOM ALPHABOT PFP.</p>
        <input type="text" className="discord-input" id="discord" name="discord" placeholder="Discord Username" value={discord} onChange={e => setDiscord(e.target.value)} />
        <a href={`https://docs.google.com/forms/d/e/1FAIpQLSd49X_j1KgE1tTSbMkqW12Oi1spoqzHviDfLN-735BMlmIaXw/formResponse?entry.1016923379=${discordFormated}&submit=Submit&fbzx=-607651750101053024`}>
            <button className="play-button">Submit</button>
        </a>
    {/* <a href={'https://docs.google.com/forms/d/e/1FAIpQLSd49X_j1KgE1tTSbMkqW12Oi1spoqzHviDfLN-735BMlmIaXw/formResponse?entry.1016923379=adfasdfasdf&submit=Submit&fbzx=-607651750101053024' + discord} target="_blank">
        <button className="play-button">SUBMIT</button>
    </a> */}
</div>
<Image className="board-img" width="600px" height="600px" src="/GameEnd.jpg" alt="AlphaBots Level 1" />

</div>
)
}


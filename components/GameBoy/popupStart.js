import Image from 'next/image';
import { useGame, useUpdateGame} from './gameContext'
import { useTime, useUpdateTime} from './timerContext'


export default function PopUpStart(props) {

    const {toggleStart}  = useUpdateGame()

    const context = useGame();

    const [popUp,setPopUp] = context['popups'];

    const {handleStart, handlePauseResume, handleReset}  = useUpdateTime()


return (

    <div id="popup" className="popup">
        <div className="pu-con">
            <Image className="board-img" width="100px" height="100px" src="/TrophyIcon.png" alt="AlphaBots Level 1" />
            <p>{props.msg}</p>
            <button className="play-button" onClick={() => {handleStart(); setPopUp(0)}}>
                        {/* <Image width="20px" height="20px" className="twitter-icon" src="/Twitter-Icon.png" alt="Twitter" /> */}
                        START
            </button>
        </div>
        <Image className="board-img" width="600px" height="600px" src="/PopUpBG.jpg" alt="AlphaBots Level 1" />

    </div>
)
}


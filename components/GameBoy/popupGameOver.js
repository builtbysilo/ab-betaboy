import Image from 'next/image';
import { useGame, useUpdateGame} from './gameContext'


export default function PopUpGameOver() {

return (

    <div id="popup" className="popup">
        <div className="pu-con">
            <Image className="board-img" width="100px" height="100px" src="/Skull-Icon.png" alt="Game Over" />
            <p>The Merchants of Valory have caught you.</p>
            <p>(Reloading game...)</p>
        </div>
        <Image className="board-img" width="600px" height="600px" src="/PopUpBG.jpg" alt="AlphaBots Level 1" />

    </div>
)
}


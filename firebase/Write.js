import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import useAuth from '../firebase/Auth';
import { useTime, useUpdateTime} from '../components/GameBoy/timerContext'


const WriteToCloudFirestore = () => {
    const { user } = useAuth();
    const context = useTime();
    const timestamp = new Date().toLocaleString('en-US', {timeZone: 'CST',});

    const [isPaused, setIsPaused] = context['paused'];
    const [isActive, setIsActive] = context['active'];
    const [time, setTime] = context['time'];

    var minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
    var seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
    var miliseconds = ("0" + ((time / 10) % 100)).slice(-2)

    const timeFormated = minutes + ":" + seconds + ":" + miliseconds

    const sendData = () => {
        try {
            firebase.firestore().collection('games').doc().set({
                uid: user.uid,
                player: user.displayName,
                timeFormated: timeFormated,
                timestamp: timestamp,
                time: time
            })
            .then (
                setTimeout(() => {
                    window.location.reload(false);
                }, 1500)
                // alert('complete')
                )
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    return (
        <button className="play-button" onClick={sendData}>SUBMIT SCORE</button>
    )
}

export default WriteToCloudFirestore
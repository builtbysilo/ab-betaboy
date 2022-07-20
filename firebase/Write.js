import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import useAuth from '../firebase/Auth';

const WriteToCloudFirestore = () => {
    const { user } = useAuth();
    const sendData = () => {
        try {
            firebase.firestore().collection('games').doc(user.uid).set({
                id: user.uid,
                player: user.displayName,
                startTime: '00:01:12',
                endTime: '01:34:21'
            })
            .then (alert('complete'))
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    return (
        <button onClick={sendData}>Send Data</button>
    )
}

export default WriteToCloudFirestore
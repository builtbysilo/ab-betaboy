import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const WriteToCloudFirestore = () => {

    const sendData = () => {
        try {
            firebase.firestore().collection('games').doc('test').set({
                id: 4321
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
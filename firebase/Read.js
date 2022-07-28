import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const ReadToCloudFirestore = () => {

    const readData = () => {

        try {
            firebase.firestore().collection('games').doc('xFGN09EoeUDZKX1vGmtc').onSnapshot(function (doc) {
                console.log(doc.data())
            })
            alert('data fetched')
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    return (
        <button onClick={readData}>Read Data</button>
    )
}

export default ReadToCloudFirestore
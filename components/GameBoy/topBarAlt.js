import Image from 'next/image';
import useAuth from '/firebase/Auth';
import ReadToCloudFirestore from '/firebase/Read';
import StopWatch from '../StopWatch';




export default function TopBarAlt() {

    const { user, loginWithTwitter, logout, error } = useAuth();
    console.log(user);


return (
    <>
            <div className="gb-bar"></div>
            <div className="name-time">
                <div className="name">
                    <div className="username">
                        {/* <h3>CURRENT PLAYER</h3> */}
                        <h4>{user?.displayName}</h4>
                        {error && <h1>{error}</h1>}
                    </div>
                </div>
                <div className="time">
                    {/* <h3>TIME:</h3> */}
                    <StopWatch/>
                </div>
            </div>
    </>
    )
}


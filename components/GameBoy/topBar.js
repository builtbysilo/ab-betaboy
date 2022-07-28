import Image from 'next/image';
import useAuth from '/firebase/Auth';
import ReadToCloudFirestore from '/firebase/Read';
import StopWatch from '../StopWatch';




export default function TopBar() {

    const { user, loginWithTwitter, logout, error } = useAuth();
    console.log(user);


return (
    <>
            <div className="gb-bar"></div>
            <div className="name-time">
                <div className="name">
                    <div className="username">
                    <h4>{user?.displayName}</h4>
                    <h4>{user?.user_id}</h4>

                    {error && <h1>{error}</h1>}
                    <button onClick={logout}>Logout</button>
                </div>
                </div>
                <div className="time">
                    <StopWatch/>
                </div>
            </div>
    </>
    )
}


import Image from 'next/image';
import useAuth from '/firebase/Auth';
import WriteToCloudFirestore from '/firebase/Write';
import ReadToCloudFirestore from '/firebase/Read';



export default function TopBar() {

    const { user, loginWithTwitter, logout, error } = useAuth();


return (
    <>
            <div className="gb-bar"></div>
            <h1>{user?.displayName}</h1>
            {error && <h1>{error}</h1>}
            <button onClick={loginWithTwitter}>Login</button>
            <button onClick={logout}>Logout</button>
            <WriteToCloudFirestore/>
            <ReadToCloudFirestore/>
    </>
    )
}


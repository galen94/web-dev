import React from "react";
import Profile from "./profile.js";
//import {useSelector} from "react-redux";


const ProfileScreen = () => {
     // const profile = useSelector(state => state.profile);
    return(
        <div>
            <Profile />
            {/*<Profile profile={profile}/>*/}
        </div>
    );
};
export default ProfileScreen;


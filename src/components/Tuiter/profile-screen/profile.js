import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './profile.css';

const Profile = () => {
     const profile = useSelector(state =>

     {console.log("We are in profile")
         console.log(state.profile)
     return state.profile;
     }
     );

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function convertDateBirth(myDate) {
        var date = myDate.split("-");
        return months[Number(date[1]) - 1] + " " + date[2] + ", " + date[0];
    };
    function convertDateJoined(myDate) {
        var date = myDate.split("/");
        return months[Number(date[0]) - 1] + ", " + date[1];
    };

return(
    <div>
        <div className="wd-back-arrow-flex">
            <div className="wd-arrow-right-space">
        <i className="wd-arrow-color fa fa-arrow-left"></i>
            </div>
            <div>
        <h1 className="wd-space-for-name"> {profile.firstName}</h1>
        <h2 className="wd-tuit-number">5,196 Tuits</h2>
            </div>
        </div>
        <div className=" mb-5 position-relative">
            <img src="data:image/jpeg;base64,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" height="200px" width="100%"/>
            <div className="wd-profile-photo-place bottom-0 left-0 position-absolute">
                <div className=" position-relative">
                    <img className="wd-profile-photo position-relative ttr-z-index-1 ttr-top-40px ttr-width-150px"
                         src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTg1NjU0MzA2MjY1OTAwNDM2/gettyimages-136785979.jpg"
                         height="150px" width="150px"/>
                </div>
            </div>
            <Link to="/tuiter/editprofile"
                  className="wd-edit-button mt-2 me-2 btn btn-large btn-black border border-secondary fw-bolder rounded-pill fa-pull-right">
                Edit profile
            </Link>
        </div>

        <div className="wd-upper-space-after-photo wd-space-for-name"> {profile.firstName}</div>
        <div className="wd-space-handle"> @{profile.handle} </div>
        <div className="wd-bio wd-space-divs">
            {profile.bio}
        </div>

        <div className="wd-space-divs">
            <span><i className="wd-first-icon fa fa-location-arrow"></i><span className="wd-first-icon"> {profile.location}</span> </span>
            <span><i className="wd-icons fa fa-birthday-cake"></i><span className="wd-icon-words"> Born {convertDateBirth(profile.dateOfBirth)} </span> </span>
            {/*<span><i className="wd-icons fa fa-birthday-cake"></i><span className="wd-icon-words"> Born {profile.dateOfBirth}</span> </span>*/}
            <span><i className="wd-icons fa fa-calendar"></i><span className="wd-icon-words"> Joined {convertDateJoined(profile.dateJoined)}</span> </span>
        </div>

        <div className="">
            <b className="wd-follow-color">{profile.followingCount}</b><span className="wd-first-icon">  Following  </span> <b className="wd-follower-spacing wd-follow-color">{profile.followersCount}</b> <span className="wd-first-icon">   Followers</span>
        </div>
    </div>
);
}
export default Profile;


import React, {useEffect} from "react";
import ProfileItem from "./ProfileItem";
import {useDispatch, useSelector} from "react-redux";
// import {getCurrentProfile} from "../../../../services/profileService";
import {getCurrentProfile} from "../../services/profileService";


const selectAllProfile = (state) => state.profile.profile;

const ProfileList = () => {
    const profile = useSelector(selectAllProfile);
    const dispatch = useDispatch();
    useEffect(() => getCurrentProfile(dispatch), [])
    return(
        <ul className="list-group">
            {
                <ProfileItem profile={profile}/>
            }
        </ul>
    );

}
export default ProfileList;


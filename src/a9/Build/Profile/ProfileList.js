import React, {useEffect, useState} from "react";
import ProfileItem from "./ProfileItem";
import history from "../../../utils/history";
import CONSTANTS  from "../../../consts";

const selectAllProfile = (state) => state.profile.profile;

const ProfileList = () => {
    const [profile, setUser] = useState({});
    const getProfile = () => {
        fetch(CONSTANTS.API_PROFILE, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
            }).catch(e => {
                history.push('/login');
                history.go();
            });
    }

    useEffect(getProfile, []);
    return(

        <ul className="list-group">
            {
                <ProfileItem profile={profile}/>
            }
        </ul>
    );

}
export default ProfileList;


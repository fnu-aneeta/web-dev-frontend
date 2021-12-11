import React, {useEffect, useState} from "react";
import ProfileHeaderItems from "./ProfileHeaderItems";
import history from "../../../utils/history";
import CONSTANTS  from "../../../consts";

const ProfileHeader = () => {
    const [profile, setProfile] = useState({});
    const getProfile = () => {
        fetch(CONSTANTS.API_PROFILE, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(profile => {
                setProfile(profile);
            }).catch(e => {
                history.push('/login');
                history.go();
            });
    }

    const logout = () => {
        fetch(CONSTANTS.API_LOGOUT, {
            method: 'POST',
            credentials: 'include'
        }).then(res => {
            history.push('/login');
            history.go();
        });
    }

    useEffect(getProfile, []);
    return(


        <ul className="list-group">
            {
                <ProfileHeaderItems profile={profile}/>
            }
        </ul>

    );

}
export default ProfileHeader;


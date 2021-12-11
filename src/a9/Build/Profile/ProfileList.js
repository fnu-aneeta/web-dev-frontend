import React, {useEffect, useState} from "react";
import ProfileItem from "./ProfileItem";
import history from "../../../utils/history";
import CONSTANTS  from "../../../consts";

const selectAllProfile = (state) => state.profile.profile;

const ProfileList = () => {
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
                <ProfileItem profile={profile}/>
            }
            <button
                onClick={logout}
                className="btn btn-danger">
                Logout
            </button>
        </ul>

    );

}
export default ProfileList;


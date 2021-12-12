import EditProfileItem from "../EditProfile/EditProfileItem";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import CONSTANTS from "../../../consts";
import history from "../../../utils/history";
// import {useEffect} from "react";
// import {updateCurrentProfile} from "../../../../services/profileService";

const selectAllProfile = (state) => state.profile.profile;

const ProfileList = () => {
    const profile = useSelector(selectAllProfile);
    // const [profile, setProfile] = useState({});
    // const getProfile = () => {
    //     fetch(CONSTANTS.API_PROFILE, {
    //         method: 'POST',
    //         credentials: 'include'
    //     }).then(res => res.json())
    //         .then(profile => {
    //             setProfile(profile);
    //         }).catch(e => {
    //         history.push('/login');
    //         history.go();
    //     });
    // }

    // const dispatch = useDispatch();
    // useEffect(()=> updateCurrentProfile(dispatch), [])
    //useEffect(getProfile, []);
    return(
        <ul className="list-group">
            {
                <EditProfileItem profile={profile}/>
            }
        </ul>
    );

}
export default ProfileList;

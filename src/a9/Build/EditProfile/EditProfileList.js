import EditProfileItem from "../EditProfile/EditProfileItem";
import {useSelector} from "react-redux";
// import {useEffect} from "react";
// import {updateCurrentProfile} from "../../../../services/profileService";

const selectAllProfile = (state) => state.profile.profile;

const ProfileList = () => {
    const profile = useSelector(selectAllProfile);
    // const dispatch = useDispatch();
    // useEffect(()=> updateCurrentProfile(dispatch), [])

    return(
        <ul className="list-group">
            {
                <EditProfileItem profile={profile}/>
            }
        </ul>
    );

}
export default ProfileList;
import React from "react";
import './profile.css';
import {Link} from "react-router-dom";

const ProfileHeaderItems = (

    {
        profile =
            {
                username: 'Aneeta',	handle: '@aneeta',
                profilePicture: 'https://e7.pngegg.com/pngimages/545/575/png-clipart-bender-robot-cartoon-robotics-cartoon-artwork.png',
                bannerPicture: 'https://miro.medium.com/max/750/1*3T7J7csXY8u36acofw5N8g.jpeg',
                bio: 'Software Engineer',
                website: 'youtube.com/webdevtv',
                location: 'Boston, MA',	dateOfBirth: '1968-09-09',	dateJoined: '2009/4',
                followingCount: '312',	followersCount: '180'

            }
    }
) => {
    // const profile = useSelector(state => state.profile.profile)
    // if(!profile) return null;
    return (
        <div className="mb-2">
            <div className="border border-dark mt-0">
                <img src={profile && profile.coverImage} alt="bannerPicture"
                     width="100%"
                     height="200"/>
                {/*<span><i className="fas fa-times wd-cross-icon-banner"></i>*/}
                {/*<i className="fas fa-camera wd-camera-icon-banner"></i></span>*/}
            </div>

            <div className="row">
                <div className="col-9">
                    <img src={profile && profile.profileImage}
                         alt="bannerPicture"
                         width="100px"
                         height="100px"
                         className="align-text-top rounded-circle"
                         style={{
                             display: "inline-block",
                             position: "relative",
                             border: "2px darkgray solid",
                             bottom: "40px",
                             left: "10px"
                         }}/>
                    <i className="fas"></i>
                </div>
                <div className="col-3">
                    <Link to="/editProfile">
                        <button className="btn btn-dark text-white bg-black rounded-pill mt-1 float-end">Edit Profile
                        </button>
                    </Link>
                </div>
            </div>

            <table>
                <div className="row">
                    <h4 className="fw-bold">{profile && profile.firstName} {profile && profile.lastName}</h4>
                    <div>
                        <span>{profile && profile.jobTitle}</span>
                        <span> at </span>
                        <span>{profile && profile.company}</span>
                    </div>
                    <div>
                        <span>{profile && profile.address && profile.address.city}</span>
                        <span>, </span>
                        <span>{profile && profile.address && profile.address.state}</span>
                        <span>, </span>
                        <span>{profile && profile.address && profile.address.country}</span>
                    </div>

                    <div className="row">
                        <div>{profile && profile.website}</div>
                    </div>
                </div>

            </table>

        </div>

    );

}
export default ProfileHeaderItems;

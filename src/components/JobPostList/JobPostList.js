import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import JobPostListItem from "./JobPostListItem";
import {fetchAllPostsByEmail} from "../../a9/services/postService";
import CONSTANTS from "../../consts";
import history from "../../utils/history";

const selectAllPosts = (state) => state.post.post;

const JobPostList = () => {
    const [profile, setProfile] = useState({});
    const jobPosts = useSelector(selectAllPosts);
    const dispatch = useDispatch();
    const fetchPostsByEmail = () => {
        fetch(CONSTANTS.API_PROFILE, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(profile => {
                setProfile(profile);
                fetchAllPostsByEmail(dispatch, profile.email)
            }).catch(e => {
            history.push('/sign-in');
            history.go();
        });
    }

    useEffect(fetchPostsByEmail, [])
    return(
        <ul className="list-group">
            {
                jobPosts.map(jobPost =>
                    <JobPostListItem jobPost={jobPost}/>
                )
            }
        </ul>
    )
};

export default JobPostList;
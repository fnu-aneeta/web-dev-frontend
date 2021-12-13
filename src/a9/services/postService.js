import CONSTANTS, {LOCAL_STORAGE} from "../../consts";
import {fetchCurrentProfile, isProfileRoleRecruiter} from "./profileService";

export const fetchCurrentProfileJobPostsLocalStorage = () =>{
    const jobPosts = localStorage.getItem(LOCAL_STORAGE.KEY_POSTS);
    const objJobPosts = JSON.parse(jobPosts)
    return objJobPosts || null;
}

export const fetchCurrentProfileJobPosts = () => {
    const profile = fetchCurrentProfile();

    return fetch(`${CONSTANTS.API_POSTS}/${profile.email}`, {
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            return response.json()
        })
        .then(posts => {
            return posts
        })
}


export const fetchAllPosts = (dispatch, queryString) => {
    fetch(`${CONSTANTS.API_SEARCH_POSTS}/${queryString}`)
        .then(response => response.json())
        .then(post =>
            dispatch({
                type: 'fetch-all-posts',
                post
            })
        );
}


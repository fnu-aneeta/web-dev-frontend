import {fetchAllTweets} from "./twitterService";

const PROFILE_API = 'http://localhost:4000/rest/profile';
// const PROFILE_API = 'https://node-on-server.herokuapp.com';

export const getCurrentProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'get-current-profile',
                profile
            })
        );

export const findProfileById = (id) =>
    fetch(`${PROFILE_API}/${id}`)
        .then(response => response.json());

export const updateCurrentProfile = (dispatch, profile) =>
    fetch(`${PROFILE_API}`, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }

    })
        .then(response => {
            console.log("hhhhh")
            // getCurrentProfile(dispatch);
          dispatch({
              type: 'update-profile',
              profile

        })});


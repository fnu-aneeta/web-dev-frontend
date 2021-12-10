import CONSTANTS  from "../../consts";

export const fetchAllPosts = (dispatch) =>
    fetch(CONSTANTS.API_POSTS)
        .then(response => response.json())
        .then(post =>
            dispatch({
                type: 'fetch-all-posts',
                post
            })
        );

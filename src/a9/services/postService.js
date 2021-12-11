import CONSTANTS  from "../../consts";

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

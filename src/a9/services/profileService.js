import CONSTANTS  from "../../consts";

export const getCurrentProfile = (dispatch) => {
    fetch(CONSTANTS.API_PROFILE, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            response.json();
        })
        .then(profile =>
            dispatch({
                type: 'get-current-profile',
                profile
            })
        );
}

//Todo: Update below
export const findProfileById = (id) =>
    fetch(`${CONSTANTS.API_PROFILE}/${id}`)
        .then(response => {
            response.json();
        });

export const updateCurrentProfile = (dispatch, profile) => {
    fetch(`${CONSTANTS.API_PROFILE}/${profile.email}`, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }

    })
        .then(response => {
            dispatch({
                type: 'update-profile',
                profile

            })
        });
}

import CONSTANTS, {LOCAL_STORAGE}  from "../../consts";
import history from "../../utils/history";

export const fetchCurrentProfile = (isRedirectLogin=true) =>{
    const profileData = localStorage.getItem("profile");
    const objProfileData = JSON.parse(profileData)
    if(!objProfileData && isRedirectLogin){
        history.push('/sign-in')
        history.go()
        return null;
    }
    return objProfileData || null;
}

export const signIn = (credentials) => {
    localStorage.clear();
    fetch(CONSTANTS.API_SIGN_IN, {
        method: 'POST',
        body: JSON.stringify(credentials),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json()).then(res => {
        if (res && res.email) {
            localStorage.setItem(LOCAL_STORAGE.KEY_PROFILE, JSON.stringify(res));
            history.push("/profile");
            history.go();
        } else {
            if(res && res.message){
                alert(res.message)
                return;
            }
            history.push('/sign-in');
            history.go();
        }
    }).catch(e => {
        alert("Server is down")
        console.log(e);
    });
}

export const signOut = () =>{
    localStorage.clear();
    fetch(CONSTANTS.API_LOGOUT, {
        method: 'POST',
        credentials: 'include'
    }).then(res => {
        history.push('/sign-in');
        history.go();
    });
}

export const redirectSignUp = () => {
    history.push("/sign-up");
    history.go();
}



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

import owner from './data/profile.json';

const initialState = {
    profile: owner
};

const profile = (state = initialState, action) => {
    // return(state);
    switch(action.type) {
        case 'get-current-profile':
            return({
                profile: action.profile
            })
            break;

        case 'update-profile':
            return ({
                profile: action.profile
            })
        break
        case 'discard-update':
            return (state);
            break
        default:
            return(state);
    }

};

export default profile;
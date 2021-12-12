import history from "../../utils/history";
import CONSTANTS  from "../../consts";

const ProfileLogout = () => {
    const logout = () => {
        fetch(CONSTANTS.API_LOGOUT, {
            method: 'POST',
            credentials: 'include'
        }).then(res => {
            history.push('/sign-in');
            history.go();
        });
    }

    return (
        <div className="list-group">
            <button
                onClick={logout}
                className="btn btn-danger">
                Logout
            </button>
        </div>

    );

}
export default ProfileLogout;


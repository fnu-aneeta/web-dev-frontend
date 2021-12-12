import { useHistory } from "react-router-dom";
import NavigationSidebar from "../NavigationSidebar";
import {useState} from "react";
// const USER_API = 'http://localhost:4000/api/users';
import CONSTANTS from "../../consts";
// import Navigation from "../Nagivation";
import history from "../../utils/history";


const SignIn = () => {
    const [user, setUser] = useState({});
    //const navigate = useHistory();
    const onSignIn = () => {
        fetch(CONSTANTS.API_SIGN_IN, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(status => {
            if (status.ok) {
                history.push("/profile");
                history.go();
            }
            //navigate('/profile');
        }).catch(e => {
            console.log("Exception");
            console.log(e);
        });
    }

    const onSignUp = ()=>{
        history.push("/sign-up");
        history.go();
    }
    return (
        <div>
            <h1>Sign In</h1>
            <input
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email"
                className="form-control"/>
            <br/>
            <input
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"
                type="password"
                className="form-control"/>
            <br/>
            <div className="row text-center">
                <div className="col-6 d-grid">
                    <button
                        className="btn btn-primary rounded-pill"
                        onClick={onSignIn}>
                        Sign In
                    </button>
                </div>
                <div className="col-6 d-grid">
                    <button
                        className="btn btn-primary rounded-pill"
                        onClick={onSignUp}>
                        Sign Up
                    </button>
                </div>
            </div>
            {/*<NavigationSidebar/>*/}
        </div>
    );
};
export default SignIn;

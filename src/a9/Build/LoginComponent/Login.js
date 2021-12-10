import { useHistory } from "react-router-dom";
import NavigationSidebar from "../NavigationSidebar";
import {useState} from "react";
// const USER_API = 'http://localhost:4000/api/users';
import CONSTANTS from "./consts";
// import Navigation from "../Nagivation";


const Login = () => {
    const [user, setUser] = useState({});
    const navigate = useHistory();
    const login = () => {
        fetch(CONSTANTS.API_LOGIN, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(status => {
            navigate('/profile')
        });
    }
    return(
        <div>
            <h1>Login</h1>
            <input
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email"
                className="form-control"/>
            <input
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"
                type="password"
                className="form-control"/>
            <button
                className="btn btn-primary"
                onClick={login}>
                Login
            </button>
            {/*<NavigationSidebar/>*/}
        </div>
    );
};
export default Login;

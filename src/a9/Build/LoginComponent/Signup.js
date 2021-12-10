import { useHistory } from "react-router-dom";
import {useState} from "react";
import NavigationSidebar from "../NavigationSidebar";
import {API_URL} from "../../../consts";
// const USER_API = 'http://localhost:4000/api/users';
// import Navigation from "../Nagivation";


const Signup = () => {
    const [user, setUser] = useState({username: 'aneeta1', password: '123a', email: 'aneeta.ochani@hotmail.com', firstname: 'fnu', lastname: 'aneeta'});
    const navigate = useHistory();
    const register = () => {
        fetch(`${API_URL}/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(status => navigate('/profile'));
    };
    return(
        <div>
            <h1>Register</h1>
            <input
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="username"
                className="form-control"/>
            <input
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"
                type="password"
                className="form-control"/>
            <input
                onChange={(e) => setUser({...user, verifyPassword: e.target.value})}
                placeholder="verify password"
                type="password"
                className="form-control"/>
            <input
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email"
                type="email"
                className="form-control"/>
            <input
                value={user.firstname}
                onChange={(e) => setUser({...user,firstname : e.target.value})}
                placeholder="firstname"
                type="firstname"
                className="form-control"/>
            <input
                value={user.lastname}
                onChange={(e) => setUser({...user,lastname : e.target.value})}
                placeholder="lastname"
                type="lastname"
                className="form-control"/>
            <button
                className="btn btn-primary"
                onClick={register}>
                Sign up
            </button>
            {/*<NavigationSidebar/>*/}
        </div>
    );
};
export default Signup;
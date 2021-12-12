import React, {useState} from "react";
import {useDispatch} from "react-redux";
import history from "../../../utils/history"

const SignupItem = () => {

    const [user, setUser] = useState({email: '',	password: '', firstName: '', lastName: '', roles:''});

    const dispatch = useDispatch();
    const save = () => {
        fetch(`https://node-backend-portal.herokuapp.com/api/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(status => {
            history.push('/');
            history.go();
        });
    }

    return(
        <div>
            <div className="row mt-2">

                <div className="col-8">
                    <h1>Sign Up</h1>
                </div>

            </div>
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Email</label>
                        <input onChange={(event) => setUser({...user, email: event.target.value})}
                               type="text" className="form-control" id="email"
                               value={user.email}
                               style={{width: "100%", color: "black",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid",
                                   display: "block",
                               }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Password</label>
                        <input onChange={(event) => setUser({...user, password: event.target.value})}
                               type="password" className="form-control" id="password"
                               value={user.password}
                               style={{width: "100%", color: "black",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid",
                                   display: "block",
                               }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">First Name</label>
                        <input onChange={(event) => setUser({...user, firstName: event.target.value})}
                               type="text" className="form-control" id="firstName"
                               value={user.firstName}
                               style={{width: "100%", color: "black",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid"}}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Last Name</label>
                        <input onChange={(event) => setUser({...user, lastName: event.target.value})}
                               type="text" className="form-control" id="lastName"
                               value={user.lastName}
                               style={{width: "100%", color: "black",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid"}}/>
                    </div>

                    <div className="roles">
                        <label htmlFor="formGroupExampleInput">I am a</label>
                        <br/>
                        <input
                            type="radio" name="roles" id="roles"
                            value={user.roles}/>&nbsp;Recruiter
                        <br/>
                        <input
                            type="radio" name="roles" id="roles"
                            value={user.roles}/>&nbsp;Candidate
                    </div>

                    <div className="d-grid mt-2">
                        {/*<Link to="/signup">*/}
                        <label onClick={save}
                               className="btn btn-primary btn-block rounded-pill">Save
                        </label>
                        {/*</Link>*/}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupItem;
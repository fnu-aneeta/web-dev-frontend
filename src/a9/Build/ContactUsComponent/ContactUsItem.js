import React, {useState} from "react";
import {useDispatch} from "react-redux";
//import profile from "../../../../reducers/profile";
// import profile from "../reducers/profile";
// import {Link} from "react-router-dom";
// import {useSelector} from "react-redux";
import contact from "../reducers/contact";
// import {useEffect} from "react";
// import {updateCurrentProfile} from "../../services/profileService";

const ContactUsItem = (
    // const contact = useSelector(state => state.contact.contact)
    {
        contact = {
            fullName: "",
            email: "",
            subject: "",
            message: ""
        }
    }) =>

 {
    const [localContact, setContact] = useState(contact);
    const updateContact = (update, type) => {
        if (type==="name"){
            setContact(prevState => ( {...prevState, fullName: update}));
        }
        else if(type === "email"){
            setContact(prevState => ( {...prevState, email: update}));
        }

        else if(type === "subject"){
            setContact(prevState => ( {...prevState, subject: update}));
        }

        else if(type === "message"){
            setContact(prevState => ( {...prevState, message: update}));
        }

    }
    const dispatch = useDispatch();
    const send = () => {
        dispatch({
            type: 'update-contact',
            contact: localContact
        })
    //     updateCurrentProfile(dispatch, {
    //         profile: localProfile
    //     });
    }
    //
    // const discard = () => {
    //     dispatch({
    //         type: 'discard-update',
    //         // profile: localProfile
    //     })
    // }

    return(
        <div>
            {/*<h5>Edit Prof for: {profile.username} </h5>*/}
            {/*<h4>Prof: {editProfile}</h4>*/}
            {/*Name: <input*/}
            {/*onChange={handleNameChange}*/}
            {/*type="text"*/}
            {/*value={name}/>*/}
            {/*<button onClick={editClickHandler}>Edit</button>*/}
            {/*<h1>Prof</h1>*/}
            {/*<input onChange={updateProfile}*/}
            {/*       value={localProfile.username}/>*/}
            <div className="row mt-2">
                {/*<div className="col-2">*/}
                {/*    <Link to="/a9/twitter/profile">*/}
                {/*        <i onClick={discard}*/}
                {/*           className="fas fa-times"/>*/}
                {/*    </Link>*/}

                {/*</div>*/}

                <div className="col-8">
                    <h4>Keep In Touch</h4>


                {/*<div className="col-1">*/}
                {/*    <Link to="/a9/twitter/profile">*/}
                {/*        <button onClick={save}*/}
                {/*                className="rounded-pill margin-left">Save*/}
                {/*        </button>*/}
                {/*    </Link>*/}
                {/*</div>*/}
                {/*// <button onClick={save}> save </button>*/}
                {/*// {JSON.stringify(profile)}*/}
                {/*</div>*/}
            {/*<div className="row">*/}
                {/*<img src={localProfile.bannerPicture} alt="bannerPicture"*/}
                {/*     width="100%"*/}
                {/*     height="200"/>*/}
            {/*</div>*/}
            {/*<div>*/}
                {/*<img src={localProfile.profilePicture} alt="profilePicture" width="100px" height="100px"*/}
                {/*     className="rounded-circle"*/}
                {/*     style={{display: "inline-block",*/}
                {/*         position: "relative",*/}

                {/*         bottom: "40px",*/}
                {/*         left: "10px"}}/>*/}
            {/*</div>*/}
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Full Name</label>
                        {/*<label htmlFor="fullName">Full Name</label>*/}
                        <input onChange={(event) => updateContact(event.target.value, "name")}
                         type="text" className="form-control" id="fname"
                               value={localContact.fullName}
                               style={{width: "100%", color: "black",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid",
                                   display: "block",
                               }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Email</label>
                        <input onChange={(event) => updateContact(event.target.value, "email")}
                       type="email" className="form-control" id="email"
                               value={localContact.email}
                               style={{width: "100%", color: "black",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid",
                                   display: "block",
                               }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Subject</label>
                        <input onChange={(event) => updateContact(event.target.value, "subject")}
                         type="text" className="form-control" id="subject"
                               value={localContact.subject}
                               style={{width: "100%", color: "black",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid",
                                   display: "block",
                               }}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Message</label>
                        <input onChange={(event) => updateContact(event.target.value, "message")}
                               type="text" className="form-control" id="message"
                               value={localContact.message}
                               style={{width: "100%", color: "black",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid"}}/>
                    </div>
                    <div className = "d-grid mt-2">
                        {/*<a href = "send.html"*/}
                        {/*   className="btn btn-primary btn-block rounded-pill">*/}
                        {/*    Send*/}
                        {/*</a>*/}
                        <button onClick={send}
                              className="btn btn-primary btn-block rounded-pill">Send
                        </button>
                    </div>
                    {/*<div className="col-1">*/}
                    {/*    <Link to="/a9/twitter/profile">*/}
                    {/*        <button onClick={save}*/}
                    {/*                className="rounded-pill margin-left">Save*/}
                    {/*        </button>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </form>
            </div>
                </div>
                <div className="col-4">
                    <h4>Job Portal Office</h4>
                    <div className="row">
                        <span>
                            <i className="fas fa-map-marker-alt"></i>&nbsp;
                            JobPort Inc. 555 Madison Avenue, Suite F-2,New York 10282
                        </span>
                    </div>
                    <br/>
                    <div className="row">
                        <span>
                            <i className="fas fa-phone-square-alt"></i>&nbsp;
                            Call Us : 0934 343 343
                        </span>
                    </div>
                    <br/>
                    <div className="row">
                        <span>
                            <i className="fas fa-fax"></i>&nbsp;
                            Fax : 0934 343 343
                        </span>
                    </div>
                    <br/>
                    <div className="row">
                        <span>
                            <i className="fas fa-envelope-square"></i>&nbsp;
                            Email : info@example.com
                        </span>
                    </div>
                    <br/>
                </div>
            </div>

        </div>
    )
}


export default ContactUsItem;
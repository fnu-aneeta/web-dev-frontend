// import EditProfileItem from "../EditProfile/EditProfileItem";
import React from "react";
import ContactUsItem from "./ContactUsItem";
import {useSelector} from "react-redux";
// import {useEffect} from "react";
// import {updateCurrentProfile} from "../../../../services/profileService";

const selectAllContact = (state) => state.contact;

const ContactUsList = () => {
    const contact = useSelector(selectAllContact);
    return(
        <ul className="list-group">
            {
                <ContactUsItem contact ={contact}/>
            }
        </ul>
    );

}
export default ContactUsList;
import {Link} from "react-router-dom";
import React from "react";
import '../HomeScreen/home.css';
// import {useSelector} from "react-redux";
const NavigationSidebar = (
    {
        active = 'home'
    }
) =>
{
    const isActive = (active, path) => `list-group-item ${active === path? 'active' : ''}`
    // const profile = useSelector(state => state.profile.profile)
    return(

        <div>
            {/*{JSON.stringify(profile)}*/}
            <div className="list-group">
                {/*<Link className="list-group-item" to="login.html">*/}
                {/*    <i className="fas fa-user-plus"></i>*/}
                {/*    <span className="d-none d-xl-inline-block">Signup / Login</span>*/}
                {/*</Link>*/}
                <Link className = {isActive(active, 'home')}
                 to = "/home">
                    <i className="fas fa-home"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Home</span>
                </Link>
                <Link className={isActive(active, 'explore')}
                to="/explore">
                    <i className="fa fa-mail-bulk"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Post A Job</span>
                </Link>
                <Link className={isActive(active, 'blog')}
                to="/blog">
                    <i className="fas fa-blog"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Blog</span>
                </Link>
                <Link className={isActive(active, 'candidate')}
                to="/profile">
                    <i className="fas fa-user-alt"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Profile</span>
                </Link>
                <Link className={isActive(active, 'contact')}
                to="/contact">
                    <i className="fas fa-comment-dots"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Contact Us</span>
                </Link>
            </div>
        </div>

    );
}
export default NavigationSidebar;

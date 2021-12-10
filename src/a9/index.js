import React from "react";
import {Link, Route} from "react-router-dom";
// import HelloWorld from "./HelloWorld";
import Practice from "./Practice";
import Build from "./Build";
import ExploreScreen from "./Build/ExploreScreen/ExploreScreen";
import HomeScreen from "./Build/HomeScreen/HomeScreen";
import ProfileScreen from "./Build/ProfileScreen/ProfileScreen";
import EditProfileScreen from "./Build/EditProfileScreen/EditProfileScreen";
import BlogScreen from "./Build/BlogComponent/BlogScreen";
import ContactUsScreen from "./Build/ContactUsScreen/ContactUsScreen";
import LoginScreen from "./Build/LoginComponent/LoginScreen";

function A9() {

    return (
        <div>

        {/*<Route path="/a9/hello" exact={true}>*/}
        {/*    <HelloWorld/>*/}
        {/*</Route>*/}
            <Link to="/home">Build</Link> |
        {/*<Route path={["/a9", "/a9/practice"]} exact={true}>*/}
        {/*    <Practice/>*/}
        {/*</Route>*/}
        <Route path="/home" exact={true}>
            <Build/>
        </Route>
        <Route path="/home" exact={true} component={ExploreScreen}/>
        <Route path="/explore" exact={true}
               component={HomeScreen}/>
        <Route path="/blog" exact={true}
                   component={BlogScreen}/>
        <Route path="/profile" exact={true} component={ProfileScreen}/>
        <Route path="/editProfile" exact={true} component={EditProfileScreen}/>
        <Route path="/contactus" exact={true} component={ContactUsScreen}/>
        <Route path="/login" exact={true} component={LoginScreen}/>
        {/*<Route path="/signup" exact={true} component={LoginScreen}/>*/}
        {/*<Route path="/profile" exact={true} component={LoginScreen}/>*/}

    </div>

);
}

export default A9;

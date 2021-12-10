import React from "react";
// import NavigationSidebar from "./NavigationSidebar";
//import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
//import WhoToFollowList from "./WhoToFollowList/WhoToFollowList";
// import PostSummaryItem from "./PostSummaryList/PostSummaryListItem";
// import PostSummaryList from "./PostSummaryList/PostSummaryList";
//import {Link} from "react-router-dom";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import EditProfileScreen from "./EditProfileScreen/EditProfileScreen";
import BlogComponent from "./BlogComponent/BlogComponent";
import {combineReducers,createStore} from "redux";
import {Provider} from "react-redux";
import tweets from "./reducers/tweets";
import who from "./reducers/who";
import profile from "./reducers/profile";
import post from "./reducers/post";
import LoginScreen from "./LoginComponent/LoginScreen";
//import BlogScreen from "./BlogScreen/BlogScreen";
// import who from "../../../reducers/who";
// import {createStore} from "redux";
// import {Provider} from "react-redux";
// import tweets from "../../../reducers/tweets";
// import EditProfileItem from "./EditProfile/EditProfileItem";
//import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";

// const store = createStore(who);

const reducer = combineReducers({tweets: tweets, who, profile, post})
const store = createStore(reducer);

const Build = () => {
    return(
        <Provider store={store}>

        <div>

            <Route path={["/", "/home"]}
                   exact={true} component={ExploreScreen}/>
            <Route path="/explore"
                   exact={true} component={HomeScreen}/>
            <Route path="/blog"
                   exact={true} component={BlogComponent}/>
            <Route path="/profile"
                   exact={true} component={ProfileScreen}/>
            <Route path="/editProfile"
                   exact={true} component={EditProfileScreen}/>
            <Route path="/login"
                   exact={true} component={LoginScreen}/>



            {/*    <PostSummaryList/>*/}
        {/*<PostSummaryItem/>*/}
        {/*    <NavigationSidebar active="home"/>*/}
        {/*    <WhoToFollowListItem/>*/}

        </div>
        </Provider>

    );
};

export default Build;

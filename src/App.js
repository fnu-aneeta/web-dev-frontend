import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import {combineReducers,createStore} from "redux";
import {Provider} from "react-redux";
import who from "./a9/Build/reducers/who";
import tweets from "./a9/Build/reducers/tweets";
import profile from "./a9/Build/reducers/profile";
import post from "./a9/Build/reducers/post";
import Signup from "./a9/Build/LoginComponent/Signup";
import JobPostScreen from "./a9/Build/JobPostScreen/JobPostScreen";
import React from "react";
import HomeScreen from "./a9/Build/HomeScreen/HomeScreen";
import ProfileScreen from "./a9/Build/ProfileScreen/ProfileScreen";
import EditProfileScreen from "./a9/Build/EditProfileScreen/EditProfileScreen";
import LoginScreen from "./a9/Build/LoginComponent/LoginScreen";
import BlogScreen from "./a9/Build/BlogComponent/BlogScreen";
import ContactUsScreen from "./a9/Build/ContactUsScreen/ContactUsScreen";
import PrivacyPolicyScreen from "./a9/Build/PrivacyPolicyScreen/PrivacyPolicyScreen";

const reducer = combineReducers({tweets: tweets, who, profile, post})
const store = createStore(reducer);

function App() {

  return (

   <BrowserRouter>
     <Provider store={store}>

         <div className="container">
             <Route path={["/", "/home"]} exact={true} component={HomeScreen}/>
             <Route path="/job-post" exact={true} component={JobPostScreen}/>
             <Route path="/blog" exact={true} component={BlogScreen}/>

             <Route path="/editProfile" exact={true} component={EditProfileScreen}/>
             <Route path="/contact" exact={true} component={ContactUsScreen}/>
             <Route path="/privacy-policy" exact={true} component={PrivacyPolicyScreen}/>
             <Route path="/signup">
                 <Signup/>
             </Route>
             <Route path="/login" exact={true} component={LoginScreen}/>
             <Route path="/profile" exact={true} component={ProfileScreen}/>


        </div>
           </Provider>
       </BrowserRouter>


  );
}

export default App;

import React from "react";
import HelloWorld from "../hello";
import Todo from "./Todo";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./Login";

const NavigationExample = () => {
    return(
        <div className="container">
        <BrowserRouter>
            <Route path="/Hello">
                <HelloWorld/>
            </Route>
            <Route path="/Todo">
                <Todo/>
            </Route>
            <Route path="/Login">
                <Login/>
            </Route>
        </BrowserRouter>
        </div>
    )

};

export default NavigationExample;
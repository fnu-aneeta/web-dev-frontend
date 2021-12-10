import React from "react";
import {Link} from "react-router-dom";


const HelloWorld = () => {
    return( <>
            <h1>Hello World!</h1>
            <Link to="/a9/practice">
                Practice
            </Link> |
            <Link to="/a9/build">
                Build
            </Link>
        </>
    )
};


export default HelloWorld;
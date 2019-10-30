import React from "react";
import {Redirect} from "react-router-dom";


const Logout =(props) =>{
    if(localStorage.getItem("isLoggedIn")==="true"){
        localStorage.removeItem("isLoggedIn");
        return <Redirect to="/login"/>
    }else{
        return <Redirect to="/login"/>;
    }
};

export default Logout;
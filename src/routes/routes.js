import React from 'react';
import {Route,
        Switch,
        BrowserRouter as Router} from 'react-router-dom';
//components
import App from "../components/App";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Logout from "../components/Logout";
import PageNotFound from '../pages/404';

const AppRoutes = ()=>{
    return(
        <Router>
            <App>     
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/posts" component={Posts}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/logout" component={Logout}/>
                    <Route component={PageNotFound}/>
                </Switch> 
            </App>
        </Router>
    );
};
export default AppRoutes;
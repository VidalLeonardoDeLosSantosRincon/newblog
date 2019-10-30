import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';

import "../../assts/css/Header.css";

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false
        }

    }
    componentDidMount(){
        this.idIntervalo = setInterval(()=>{
            if(localStorage.getItem("isLoggedIn")==="true"){
                this.setState({
                    isLoggedIn:true
                });
            }else{
                this.setState({
                    isLoggedIn:false
                }); 
            }
        },100);
    }

    componentWillUnmount(){
        clearInterval(this.idIntervalo);
    }
    render(){
        let header;
        if(!this.state.isLoggedIn){
            header =  <header className="header">
                        <span id="logo-box">
                        </span>
                        <span id="switch-box">
                        </span>
                        <span id="menu-box">
                            <ul id="menu">
                                <Link to="/login"><li>Login</li></Link>
                                <Link to="/signup"><li>Sign up</li></Link>
                            </ul>
                        </span>
                    </header>;       
        }else{
            header =  <header className="header">
                            <span id="logo-box">
                            </span>
                            <span id="switch-box">
                            </span>
                            <span id="menu-box">
                                <ul id="menu">
                                    <Link to="/posts"><li>Posts</li></Link>
                                    <Link to="/logout"><li>Log out</li></Link>
                                </ul>
                            </span>
                        </header>;
        }
        
        return(
            <Fragment>
                {
                    header
                }
            </Fragment>
        );
    }
}

export default Header;
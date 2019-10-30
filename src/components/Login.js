import React,{Component, Fragment} from 'react';
import {Redirect} from "react-router-dom";
import "../assts/css/Login.css";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
           email:"",
           password:"", 
           isLoggedIn :null
        };
        this.handlerClick = this.handlerClick.bind(this);
        this.handlerOnChange = this.handlerOnChange.bind(this);
    }

    componentDidMount(){

    }

    handlerClick(e){
        e.preventDefault();
        //alert(`${this.state.email}\n${this.state.password}`);
        if(this.state.email.trim()==="" 
        || this.state.password.trim()==="" ){
            alert("Empty fields are not allowed");
        }else{
            this.setState({
                isLoggedIn : true
            });
            alert("You got logged in");
        }
    }

    handlerOnChange(e){
        if(e.target.name==="email"){
            this.setState({
                email: e.target.value
            });  
        }else if(e.target.name==="password"){
            this.setState({
                password: e.target.value
            });
        }
    }

    render(){
        if(localStorage.getItem("isLoggedIn")==="true"){
            return <Redirect to="/posts"/> 
        }else{
            if(this.state.isLoggedIn){
                localStorage.setItem("isLoggedIn",this.state.isLoggedIn);
                return <Redirect to="/posts"/>
            }else{
                return(
                    <Fragment>
                        <div className="ctr-login">
                            <div className="ctr-form-login">
                                <form id="form-login" className="form-login">
                                    <input className="field"type="email" name="email" placeholder="Email" onChange={this.handlerOnChange} value={this.state.email}/><br/>
                                    <input className="field" type="password" name="password" placeholder="Password" onChange={this.handlerOnChange} value={this.state.password} /><br/>
                                    <input className="btn" type="button" value="Login" onClick={this.handlerClick}/>  
                                </form>
                            </div>
                        </div>
                    </Fragment>    
                );
            }
        }
    }
}
export default Login;
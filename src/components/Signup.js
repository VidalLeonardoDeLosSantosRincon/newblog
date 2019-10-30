import React,{Component, Fragment} from 'react';

import "../assts/css/Signup.css";


class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            verify_password:""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCancelInput = this.handleCancelInput.bind(this);
        this.handleInputClick = this.handleInputClick.bind(this);
    }


handleInputChange(e){
    this.setState({
        [e.target.name]:e.target.value
    });  
}

handleCancelInput(){
    const {email, password, verify_password} = this.state;
    if(email.trim()!=="" || password.trim()!=="" || verify_password.trim()!==""){
        this.setState({
            email:"",
            password:"",
            verify_password:""
        }); 
    }
}

handleInputClick(){
    const {email, password, verify_password} = this.state;
    if(email.trim()!=="" && password.trim()!=="" && verify_password.trim()!==""){
        alert(`${email}\n${password}\n${verify_password}`);
    }else if(email.trim()!=="" || password.trim()!=="" || verify_password.trim()!==""){
        alert("Empty fields are not allowed");
    }
}

    render(){
        const {email, password, verify_password} = this.state;
        return(
            <Fragment>
                <div className="ctr-signup">
                    <div id="signup-form-box">
                        <form name="signup-form" id="signup-form">
                            <input className="signup-form-field" name="email" type="emial" placeholder="Emial" value={email} onChange={this.handleInputChange}/><br/>
                            <input className="signup-form-field" name="password" type="password" placeholder="Password" value={password} onChange={this.handleInputChange}/><br/>
                          <input className="signup-form-field" name="verify_password" type="password" placeholder="Verify password" value={verify_password} onChange={this.handleInputChange}/><br/>
                            <span id="signup-form-btn-box">
                                <input className="signup-form-btn" onClick={this.handleInputClick} id="btn-signup" type="button" value="Sign up"/>
                             <input className="signup-form-btn" onClick={this.handleCancelInput} id="btn-cancel" type="button" value="Cancel"/>
                            </span>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Signup;
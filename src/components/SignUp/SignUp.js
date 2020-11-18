import React from 'react';
import SignUpInner from "./SignUpInner";
 
import Button from "../Button/Button"

function SignUp(){

    return(
        <div className="container">      
        <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
                <form>
                <h3 style={{color:"#212121",textAlign:"center"}}>Create Account</h3>
                <br/>
                <SignUpInner name="FirstName" type="text" labelname="First name"></SignUpInner>
                <SignUpInner name="LastName" type="text" labelname="Last name"></SignUpInner>
                <SignUpInner name="Email" type="email" labelname="Email"></SignUpInner>
                <SignUpInner name="Password" type="text" labelname="Password"></SignUpInner>
                <SignUpInner name="Confirm Password" type="text" labelname="ConfirmPassword"></SignUpInner>
                <div className="col-sm-2 ml-auto">
                    <Button  title="SignUp" style={{backgroundColor: "#448AFF"}}></Button> 
                </div>
                
                </form> 
            </div>
        </div>     
                   
             
        </div>
    );
}


export default SignUp;
import React from 'react';
import Buttton from "../Button/Button";
import SignUpInner  from "../SignUp/SignUpInner";


function SignIn()
{
    return(
    <div className="container">      
        <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
                <form>
                    <h3>SignIn</h3>
                    <br/>
                    <SignUpInner name="Email" type="email" labelname="Email"></SignUpInner>
                    <SignUpInner name="Password" type="text" labelname="Password"></SignUpInner>
                    <div className="col-sm-2 ml-auto">
                      <Button title="SignIn"></Button>
                     </div> 
                </form>
                <div>Already have an account? <a>SignIn</a></div>
            </div>
                    
             </div>
        </div>   
    
    )
}



export default SignIn;
import React,{useState} from 'react';
import Button from "../Button/Button";
import SignUpInner  from "../SignUp/SignUpInner";
import {Link} from "react-router-dom";


function SignIn()
{
    const [value,setValue]= useState({
        email:"",
        password:""
    });

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
                    <Link to="/blogPosts">
                        <Button  title="SignIn"></Button>
                    </Link>
                      
                     </div> 
                </form>
                
               
            </div>
                    
             </div>
        </div>   
    
    )
}



export default SignIn;
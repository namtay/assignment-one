import React,{useState} from 'react';
import Button from "../Button/Button";
import SignUpInner  from "../SignUp/SignUpInner";


function SignIn()
{
    const [value,setValue]= useState({
        email:"",
        password:""
    });


       const handleSubmit=(e)=>{
        e.preventDefault();
        setValue(e.target.input)
      
}


const handleSignIn=(event)=>{
   event.preventDefault();
    

}
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
                      <Button  title="SignIn"></Button>
                     </div> 
                </form>
                
               
            </div>
                    
             </div>
        </div>   
    
    )
}



export default SignIn;
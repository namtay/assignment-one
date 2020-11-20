import React,{useState}from 'react';
import SignUp from "./components/SignUp/SignUp"
import SignIn from "./components/SignIn/SignIn";
import BlogPosts from "./components/BlogPosts/BlogPosts";
import {Switch,Route} from "react-router-dom";



function App() {
  
  const [signIn,setSignIn]=useState(false);


  const handleSignIn=()=>{
    
    setSignIn(!signIn); 
    console.log(signIn)

}
  
  return (
    
      <div>
                 
         <Switch>
              <Route path="/" component={SignUp} exact></Route>
              <Route path="/signIn" component={SignIn} exact></Route>
              <Route path></Route>
              <Route></Route>

              
         </Switch>
        
      
      </div>
    
    
    
    
  );
}

export default App;

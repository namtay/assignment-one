import React from 'react';
import SignUp from "./components/SignUp/SignUp"
import SignIn from "./components/SignIn/SignIn";
import BlogPosts from "./components/BlogPosts/BlogPosts";
import NavBar from "./components/Navbar/Navbar";
import Edit from "./components/Edit/Edit";
import Blog from "./components/BlogPosts/Blog";
import {Switch,Route} from "react-router-dom";




function App() {
  
 


 
  
  return (
    
      <div>
         <NavBar></NavBar>      
        
         <Switch>
              <Route path="/" component={SignUp} exact></Route>
              <Route path="/signIn" component={SignIn} exact></Route>
              <Route path="/blogPosts" component={BlogPosts}></Route>
              <Route path="/edit" component={Edit}></Route>
              <Route path="/blog" component={Blog}></Route>

              
         </Switch>
        
      
      </div>
    
    
    
    
  );
}

export default App;


 //The navbar shows on every page whilst the other pages are rendered dynamically
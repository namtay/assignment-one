import React from 'react';
import SignUpInner from "../SignUp/SignUpInner";
import Blog from "../BlogPosts/Blog";

export default function Edit(props) {
    return (
        <div class="container">
            <SignUpInner type="text" name="Title" value={props.value} onChange=""></SignUpInner>
            <div className="row form-group">
                    <label style={{color:"#757575"}} className="col-12 col-sm-4 col-form-label" >Content</label>  
                                  
            <div className="col-12 col-md-8">   
                <textarea id="editContent" name="editContent" className="form-control">
                what do we do?
               </textarea>
            </div>
            </div>
            
        </div>
    )
}

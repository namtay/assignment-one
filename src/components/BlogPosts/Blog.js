import React,{useState} from 'react';
import Button from "../Button/Button";
//import {Link} from "react-router-dom";

export default function Blog(props) {
    
    const [upVotes,setUpVotes]= useState(10);
    const [downVotes,setDownVotes]= useState(10);

    const [isEdited,setIsEdited]=useState(false);

    const[isHalfPost,setIsHalfPost]=useState(true);

    const handleUpVotes=()=>{
        if(upVotes>0){
            setUpVotes(upVotes+1);
        }   
    
    }

    const handleDownVotes=()=>{
        if(downVotes>0){
            setDownVotes(downVotes+1); 
        }

        
           
    }

    const handleIsEdited=(event)=>{
        event.preventDefault();
        setIsEdited(true);
    }
    const handleSaved=()=>{
        setIsEdited(false);
    }

    const handleIsHalfPost=()=>{
        setIsHalfPost(!isHalfPost);
    }
    return (
        <div className="container" key={props.key}>
           <div className="row ">
               <div className="col-12 col-sm-8 mx-auto card">
                    <div>
                           {isEdited?
                            <div>
                            <input className="card-title" onChange={props.onChangeOne} value={props.title} ></input>                    
                            <div className="media-body">                                   
                                    <textarea onChange={props.onChangeTwo} className="form-control" value={props.content}>{props.content}</textarea>
                                        
                                    <div>
                                         <span>Author: <input className="form-control"  onChange={props.onChangeThree} value={props.author}></input></span>
                                        
                                    </div>
                                    <div>
                                            <span>Date:<input className="form-control"  onChange={props.onChangeFour} value={props.date}></input>
                                            </span>                                       
                                    </div>
                            </div>
                            <br></br>
                            <div className="row row-content">
                                
                                <div className="col-4 col-sm-2 offset-sm-5">
                                     <Button clicked={handleSaved} title="Save"></Button>                            
                                   
                                </div>

                            </div>
                                  
                     </div>:      
                         
                     <div>
                     <h3 className="card-title" >{props.title}</h3>                    
                     <div className="media-body"> 
                            {  isHalfPost?
                                <div>
                                <p>{props.content}</p>
                                <Button clicked={handleIsHalfPost} title="Read More"></Button>
                                </div>
                                 :
                                <div>
                                <p>{props.fullcontent}</p>              
                                <Button clicked={handleIsHalfPost} title="Read Less"></Button>
                                </div>
                               
                            }                
                            
                             <div>
                                     <span>Author: {props.author}</span>
                                 
                             </div>
                             <div>
                                     <span>Date:{props.date}
                                     </span>
                                 
                             </div>
                     </div>
                     <div className="row align-self-center">
                         <div className="col-4  col-sm-1 offset-sm-2">
                             <p>{upVotes}</p>                                
                         </div>
                         <div className="col-4 col-sm-2 ">
                             <Button clicked={handleUpVotes} title="UpVotes"></Button>
                         </div>
                         <div className="col-4  col-sm-1">
                             <p>{downVotes}</p>                                
                         </div>
                         <div className="col-4 col-sm-2">
                             <Button clicked={handleDownVotes} title="DownVotes"></Button>
                         </div>
                         <div className="col-4 col-sm-2">
                              <Button clicked={handleIsEdited} id="1" title="Edit"></Button>                            
                            
                         </div>
                         <div className="col-4 col-sm-2">
                             <Button  title="Delete"></Button>
                         </div>
                     </div>
                           
                     </div>
                           }

                     </div>          
                </div>
                            
           </div>                     
       </div>             
    )
}



//<Link to="/edit"> <Button id="1" title="Edit"></Button></Link>
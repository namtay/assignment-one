import React from 'react';


function Button(props){
    return(

        <a role="button" clicked={props.clicked} className="btn btn-primary"  href="#">{props.title}</a>
    )
}

export default Button;
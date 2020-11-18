import React from 'react';


function Button(props){
    return(

        <a role="button" class="btn btn-primary"  >{props.title}</a>
    )
}

export default Button;
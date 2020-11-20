import React from 'react';


export default function BlogDefinition(props) {
    return (
        
        <div>
            <label>{props.title}:
            </label>
            <p type={props.type}>{props.content}</p>
        </div>
    )
}

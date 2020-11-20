import React from 'react';
import BlogDefinition from "./BlogDefinition"

export default function Blog(props) {
    

    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.src}>
            </img>
            <p>{props.content}</p>
            <BlogDefinition title="Author" type="text" content="Christabel Tay"></BlogDefinition>
        </div>
    )
}

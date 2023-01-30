import "./App.css";
import React from "react";


export default function Tags(props) {

    const tags=props.name ;
    // const key=props.index ;

    console.log(tags)
 

    
    return (
        <ul className="tags">
                        
           {tags.map((tag,key) => (<li key={key} className="tag">#{tag}</li>))}
           
        </ul>
    );

}


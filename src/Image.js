import React from "react";
import "./Image.css";

function Image() {
    return (
        <img className="logo"
            src={require('./jspl_logo.png')}
            alt="Jspl-logo"
        />
    )
    
}
export default Image;
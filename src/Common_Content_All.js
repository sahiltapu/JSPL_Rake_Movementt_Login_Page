import React from "react";
import "./Common_Content_All.css";



function Commom_Content_All() {
    return (
        <>
        <header>
            <div className="Top_Title">
                <div>
                    <a href="./App.js">
                        <img className="JSPL_LOGO"
                            src={require('./jspl_logo.png')}
                            alt="Jspl-logo" />
                    </a>
                </div>
                <div className="Heading_line_div">
                    <h2 className="Heading_line">Rake Movement System</h2>
                </div>
                
            </div>
            </header>
            </>




    );
    }


export default Commom_Content_All;
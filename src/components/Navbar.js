import React from "react";
import reactLogo from "./images/react.png"
export default function Navbar(){
    return (
       <nav>
            <div className="nav-Logo">
                <img src={reactLogo} alt="reactlogo" width="50px"/>
                <h4>ReactFacts</h4>
            </div>
            <div className="nav-list">
                <ul>
                    <li>React Course - Project 1</li>
                </ul>
            </div>
       </nav>
    )
}
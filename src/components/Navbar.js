// import React from "react";
// import reactLogo from "./images/react.png"
// export default function Navbar(){
//     return (
//        <nav>
//             <div className="nav-Logo">
//                 <img src={reactLogo} alt="reactlogo" width="50px"/>
//                 <h4>ReactFacts</h4>
//             </div>
//             <div className="nav-list">
//                 <ul>
//                     <li>React Course - Project 1</li>
//                 </ul>
//             </div>
//        </nav>
//     )
// }

import React from "react"
import reactLogo from "./images/react.png"
import './style.css'
export default function Navbar(props) {
    // console.log(props)
    return (
        <nav 
            className={props.darkMode ? "dark": ""}
         >
            <img 
                className="nav--logo_icon"
                src={reactLogo}
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}
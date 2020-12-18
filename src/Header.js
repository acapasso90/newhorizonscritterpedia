import React from "react";
import fish from "./fish.png";
import butterfly from "./butterfly.png";
import octopus from "./octopus.png";

export default function Header(){
    return(
        <div className="Header">
            <div className="headerText">
            <h1>New Horizon's Fish App</h1></div>
            <div className="left">
                <div className="iconLinks">
            <img src={butterfly} alt="bugs" />
            <img src={fish} alt="fish" />
            <img src={octopus} alt="deep-sea" />
            </div>
            </div>
         </div>
        )
}
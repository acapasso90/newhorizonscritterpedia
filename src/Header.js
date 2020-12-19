import React from "react";
import fish from "./fish.png";
import butterfly from "./butterfly.png";
import octopus from "./octopus.png";
import DisplayBugApp from './DisplayBugApp.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Header(){
    return(<Router>
        <div className="Header">
            <div className="headerText">
            <h1>New Horizon's Fish App</h1></div>
            <div className="left">
                <div className="iconLinks"><nav>
                <Link to="/bug">           <img src={butterfly} alt="bug" /></Link></nav>
            <Route
                    path="/bug"
                    component={DisplayBugApp}
                    exact 
                />
            <img src={fish} alt="fish" />
            <img src={octopus} alt="deep-sea" />
            </div>
            </div>
         </div></Router>
        )
}
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import fish from "./fish.png";
import DisplaySeaApp from "./DisplaySeaApp.js";
import DisplayFishApp from "./DisplayFishApp.js";
import DisplayBugApp from "./DisplayBugApp.js";
import butterfly from "./butterfly.png";
import octopus from "./octopus.png";



function App() {
return (
  <Router>
     <main>
          <div className="Header">
            <div className="headerText">
            <h1>New Horizon's Critterpedia</h1></div>
            <div className="left">
                <div className="iconLinks">
                <nav>
                <Link to="/bugs" style={{ textDecoration: 'none' }}> <img src={butterfly} alt="bug" /></Link>
        <Link to="/" style={{ textDecoration: 'none' }}> <img src={fish} alt="fish" /></Link>
        <Link to="/deepsea" style={{ textDecoration: 'none' }}><img src={octopus} alt="deep-sea" /> </Link>
       </nav>
            </div>
            </div>
         </div>
         <Switch>
         <Route path="/" exact component={DisplayFishApp} />
         <Route path="/bugs"  component={DisplayBugApp} />
    <Route path="/deepsea"  component={DisplaySeaApp} />
    <Route render={() => <h1>404: page not found</h1>} />
    </Switch>
         </main>
    </Router>
  );
}

export default App;
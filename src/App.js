import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
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
            <h1>New Horizon&apos;s Critterpedia</h1></div>
            <div className="left">
                <div className="iconLinks">
                  <div className="row">
                  <div className="backdrop1"></div>
                  <div className="backdrop2"></div>
                  <div className="backdrop3"></div>
                  </div>
                <nav>
                <NavLink to="/bugs" style={{ textDecoration: 'none' }} > <img src={butterfly} alt="bug" className="butterfly"/></NavLink>
        <NavLink to="/"  style={{ textDecoration: 'none' }} > <img src={fish} alt="fish" className="fishpic"/></NavLink>
        <NavLink to="/deepsea" style={{ textDecoration: 'none' }} ><img src={octopus} alt="deep-sea" className="octopus"/> </NavLink>
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
         <div className="footer">
      <footer><a href="https://github.com/acapasso90/newhorizonscritterpedia" target="_blank"  rel="noreferrer">Open-sourced</a> app built by <a href="https://www.amandacapasso.com" target="_blank"  rel="noreferrer">Amanda Capasso</a></footer>
      </div>
    </Router>
  );
}

export default App;
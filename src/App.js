import React, {useState} from "react";
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import fish from "./fish.png";
import butterfly from "./butterfly.png";
import octopus from "./octopus.png";
import octopusActive from "./octopusActive.png";
import butterflyActive from "./butterflyActive.png";
import fishActive from "./fishActive.png";
import DisplaySeaApp from "./DisplaySeaApp.js";
import DisplayFishApp from "./DisplayFishApp.js";
import DisplayBugApp from "./DisplayBugApp.js";



function App() {
const [seasrc, setSeasrc] = useState(octopus);
const [bugsrc, setBugsrc] = useState(butterfly);
const [fishsrc, setFishsrc] = useState(fishActive);

    function seaLinkActive(){
      if (bugsrc === butterflyActive) {setBugsrc(butterfly);
        setSeasrc(octopusActive);}
   else if (fishsrc === fishActive){setFishsrc(fish);
    setSeasrc(octopusActive);}
    else{
    setSeasrc(octopusActive);}}
  
  function fishLinkActive(){ if (bugsrc === butterflyActive) {setBugsrc(butterfly);
    setFishsrc(fishActive);}
    else if (seasrc === octopusActive){setSeasrc(octopus);
      setFishsrc(fishActive);}
    else{setFishsrc(fishActive);}}
  
    function bugLinkActive(){ if (fishsrc === fishActive) {setBugsrc(butterflyActive);
      setFishsrc(fish);}
      else if (seasrc === octopusActive){setSeasrc(octopus);
        setBugsrc(butterflyActive);}
      else{setBugsrc(butterflyActive);}}


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
  <NavLink to="/bugs" style={{ textDecoration: 'none' }} > <img src={bugsrc} alt="bug" className="butterfly" onClick={bugLinkActive}/></NavLink>
<NavLink to="/"  style={{ textDecoration: 'none' }} > <img src={fishsrc} alt="fish" className="fishpic" onClick={fishLinkActive} /></NavLink>
<NavLink to="/deepsea" style={{ textDecoration: 'none' }} ><img src={seasrc} alt="deep-sea" className="octopus" onClick={seaLinkActive}/> </NavLink>
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
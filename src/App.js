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
import axios from "axios";
const url = window.location.pathname;
const signal = axios.CancelToken.source();


function App() {
const [seasrc, setSeasrc] = useState(octopus);
const [bugsrc, setBugsrc] = useState(butterfly);
const [fishsrc, setFishsrc] = useState(fishActive);
const Active = {
  opacity: "100%",
  position: "absolute",
  textAlign: "center",
  backgroundColor: "#f7cc64",
  borderRadius: "30px",
  color: "#847f6c",
  fontWeight: "bold",
  paddingTop: "10px",
  minHeight: "30px",
  minWidth: "90.5px",
  whiteSpace: "nowrap",
}
const InActive = {opacity: "0%",
position: "absolute",}
const [styleFish, setStyleFish] = useState(Active);
const [styleBug, setStylebug] = useState(InActive);
const [styleOctopus, setStyleOctopus] = useState(InActive);

  

    function seaLinkActive(){ 
      if (bugsrc === butterflyActive) {setBugsrc(butterfly);
        setStylebug(InActive);
        setSeasrc(octopusActive);
      setStyleOctopus(Active);
      signal.cancel();}
   else if (fishsrc === fishActive){setFishsrc(fish);
    setStyleFish(InActive);
    setSeasrc(octopusActive);
    setStyleOctopus(Active);
    signal.cancel()}}
  
  function fishLinkActive(){ if (bugsrc === butterflyActive) {setBugsrc(butterfly);
    setStylebug(InActive);
    setFishsrc(fishActive);
    setStyleFish(Active);
    signal.cancel()}
    else if (seasrc === octopusActive){setSeasrc(octopus);
      setStyleOctopus(InActive);
      setFishsrc(fishActive);
      setStyleFish(Active);
      signal.cancel()}}
  
    function bugLinkActive(){ if (fishsrc === fishActive) {setBugsrc(butterflyActive);
      setStylebug(Active);
      setFishsrc(fish);
      setStyleFish(InActive);
      signal.cancel()}
      else if (seasrc === octopusActive){setSeasrc(octopus);
        setStyleOctopus(InActive);
        setBugsrc(butterflyActive);
        setStylebug(Active);
        signal.cancel()}}

        window.addEventListener('load', function () {
          if ( url === '/bugs')
          {bugLinkActive()}
  else if  (url === '/deepsea'){seaLinkActive()}
      });

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
  <NavLink to="/bugs" style={{ textDecoration: 'none' }} className="link" > <img src={bugsrc} alt="bug" className="butterfly" onClick={bugLinkActive}/></NavLink>
  <label style={styleBug} className="bugLabel" >Insects</label>
<NavLink to="/"  style={{ textDecoration: 'none' }} className="link"> <img src={fishsrc} alt="fish" className="fishpic" onClick={fishLinkActive} /></NavLink>
<label style={styleFish} className="fishLabel">Fish</label>
<NavLink to="/deepsea" style={{ textDecoration: 'none' }} className="link"><img src={seasrc} alt="deep-sea" className="octopus" onClick={seaLinkActive} /> </NavLink>
<label style={styleOctopus} className="seaLabel">Sea Creatures</label>

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
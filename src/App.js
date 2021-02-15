import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import fish from "./fish.png";
import axios from "axios";
import butterfly from "./butterfly.png";
import octopus from "./octopus.png";
import octopusActive from "./octopusActive.png";
import butterflyActive from "./butterflyActive.png";
import fishActive from "./fishActive.png";
import DisplaySeaApp from "./DisplaySeaApp.js";
import DisplayFishApp from "./DisplayFishApp.js";
import DisplayBugApp from "./DisplayBugApp.js";


const url = window.location.pathname;


function App() {
const [seasrc, setSeasrc] = useState(octopus);
const [bugsrc, setBugsrc] = useState(butterfly);
const [fishsrc, setFishsrc] = useState(fishActive);
const [backdropheight, setBackdropheight] = useState("");

useEffect(() => {
  let screenheight = (screen.height)*2;
  setBackdropheight(screenheight);
  }, []);

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
const cancelTokenSource = axios.CancelToken.source();
// Makes previously active bug or fish icons revert to normal and adds active styling to the deep sea icon link
    function seaLinkActive(){  cancelTokenSource.cancel();
      if (bugsrc === butterflyActive) {setBugsrc(butterfly);
        setStylebug(InActive);
        setSeasrc(octopusActive);
      setStyleOctopus(Active);
      }
   else if (fishsrc === fishActive){setFishsrc(fish);
    setStyleFish(InActive);
    setSeasrc(octopusActive);
    setStyleOctopus(Active);
   }}
// Makes previously active bug or deep sea icons revert to normal and adds active styling to the fish icon link
  function fishLinkActive(){ 
    cancelTokenSource.cancel();
    if (bugsrc === butterflyActive) {setBugsrc(butterfly);
    setStylebug(InActive);
    setFishsrc(fishActive);
    setStyleFish(Active);
    }
    else if (seasrc === octopusActive){setSeasrc(octopus);
      setStyleOctopus(InActive);
      setFishsrc(fishActive);
      setStyleFish(Active);
     }}
// Makes previously active fish or deep sea icons revert to normal and adds active styling to the bug icon link
    function bugLinkActive(){
      cancelTokenSource.cancel();
      if (fishsrc === fishActive) {setBugsrc(butterflyActive);
      setStylebug(Active);
      setFishsrc(fish);
      setStyleFish(InActive);
     }
      else if (seasrc === octopusActive){setSeasrc(octopus);
        setStyleOctopus(InActive);
        setBugsrc(butterflyActive);
        setStylebug(Active);
       }}
  // on load if url is on /bug runs bugLinkActive function to set the bug icon to "active"
        window.addEventListener('load', function () {
          if ( url === '/bugs')
          {bugLinkActive()}
  // on load if url is on /deepsea runs bugLinkActive function to set the deep sea icon to "active"
  else if  (url === '/deepsea'){seaLinkActive()}
      });

return (
  <Router>
     <main>
       <div className="container">
       <div className="backdropBlack" style={{ minHeight: backdropheight }}> </div>
          <div className="Header">
            <div className="headerText">
            <h1>New Horizon&apos;s Critterpedia</h1></div>
            <div className="left">
   <div className="iconLinks">
    <div className="hrow">
    <div className="backdrop1"></div>
    <div className="backdrop2"></div>
    <div className="backdrop3"></div>
    </div>
  <nav>
  <NavLink to="/bugs" style={{ textDecoration: 'none' }} className="link" > <img src={bugsrc} alt="bug" className="butterfly"  onClick={bugLinkActive}  /></NavLink>
  <label style={styleBug} className="bugLabel" >Insects</label>
<NavLink to="/"  style={{ textDecoration: 'none' }} className="link"> <img src={fishsrc} alt="fish" className="fishpic" onClick={fishLinkActive}  /></NavLink>
<label style={styleFish} className="fishLabel">Fish</label>
<NavLink to="/deepsea" style={{ textDecoration: 'none' }} className="link"><img src={seasrc} alt="deep-sea" className="octopus" onClick={seaLinkActive}  /> </NavLink>
<label style={styleOctopus} className="seaLabel">Sea Creatures</label>
</nav>
<a href="https://determined-lamarr-edc795.netlify.app/" className="kk" target="_blank"  rel="noreferrer">K.K. Slider Jukebox</a>
</div>
</div>





         </div>
         <Switch>
         <Route path="/" exact component={DisplayFishApp} />
         <Route path="/bugs"  component={DisplayBugApp} />
    <Route path="/deepsea"  component={DisplaySeaApp} />
    <Route render={() => <h1>404: page not found</h1>} />
    </Switch>
    
         <div className="footer">
      <footer><p>All images, information, quotes, and characters found on the app are the sole property of Nintendo and Animal Crossing
and are only used for non-commercial and educational purpose.</p>
        <a href="https://github.com/acapasso90/newhorizonscritterpedia" target="_blank"  rel="noreferrer">Open-sourced</a> app built by <a href="https://www.amandacapasso.com" target="_blank"  rel="noreferrer">Amanda Capasso</a> using the <a href="http://acnhapi.com/" target="blank" rel="noreferrer">ACNH API</a> </footer>
      </div>
      </div>
      </main>
    </Router>
  );
}
export default App;
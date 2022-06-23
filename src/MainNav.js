import {React} from "react"
import axios from "axios";

import { useNavigate, Outlet } from "react-router-dom";

import butterfly from "./butterfly.png";
import octopus from "./octopus.png";
import octopusActive from "./octopusActive.png";
import butterflyActive from "./butterflyActive.png";
import fishActive from "./fishActive.png";
import fish from "./fish.png";

import "./MainNav.css";

export function MainNav(){
    const navigate = useNavigate();

    const url = window.location.pathname;


    const cancelTokenSource = axios.CancelToken.source();
    // Makes previously active bug or fish icons revert to normal and adds active styling to the deep sea icon link
    function seaLinkActive(){  
        cancelTokenSource.cancel();
        navigate('/deepsea', {replace: true})
        }
        // Makes previously active bug or deep sea icons revert to normal and adds active styling to the fish icon link
        function fishLinkActive(){ 
            cancelTokenSource.cancel();
            navigate('/fish', {replace: true})
           }
        // Makes previously active fish or deep sea icons revert to normal and adds active styling to the bug icon link
        function bugLinkActive(){
            cancelTokenSource.cancel();
            navigate('/bugs', {replace: true})
        }

    // on load if url is on /bug runs bugLinkActive function to set the bug icon to "active"
    window.addEventListener('load', function () {
        if ( url === '/bugs'){bugLinkActive()}
        // on load if url is on /deepsea runs bugLinkActive function to set the deep sea icon to "active"
        else if  (url === '/deepsea'){seaLinkActive()}});

        return(
            <div className="critterpedia">
                <div className="nav">
                    <div className="iconLinks">
                        <div className="hrow">
                            <div className="backdrop">  
                                <img src={url.includes('bug') ? butterflyActive : butterfly} alt="bug"      className="butterfly"  onClick={bugLinkActive}  />
                                {url.includes('bug') && 
                                    <label className="bugLabel" >Insects</label>
                                }
                            </div>
                            <div className="backdrop">  
                                <img src={url.includes('fish') ? fishActive : fish} alt="fish" className="fishpic" onClick={fishLinkActive}  />
                                {url.includes('fish') && 
                                    <label className="fishLabel">Fish</label>
                                }
                            </div>
                            <div className="backdrop">
                                <img src={url.includes('sea') ? octopusActive : octopus} alt="deep-sea" className="octopus" onClick={seaLinkActive}  /> 
                                {url.includes('sea') && 
                                    <label className="seaLabel">Sea Creatures</label>
                                }
                            </div>
                        </div>
                    </div>
                    <header>
                        New Horizon&apos;s Critterpedia
                    </header>
                </div>
            <Outlet />
            <div className="footer">
                <footer>
                    All images, information, quotes, and characters found on the app are the sole property of Nintendo and Animal Crossing
                    and are only used for non-commercial and educational purpose.
                    <a href="https://github.com/acapasso90/newhorizonscritterpedia" target="_blank"  rel="noreferrer"> Open-sourced</a> app built by <a href="https://www.amandacapasso.com" target="_blank"  rel="noreferrer">Amanda Capasso</a> using the <a href="http://acnhapi.com/" target="blank" rel="noreferrer">ACNH API</a>
                </footer>
            </div>
        </div>
    )
}
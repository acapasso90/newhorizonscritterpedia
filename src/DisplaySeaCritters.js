import React, {useState}  from "react";
import axios from "axios";
import SeaCrittersInfoShown from "./SeaCrittersInfoShown.js";
import Loader from 'react-loader-spinner'


export default function DisplaySeaCritters(){
    const [SeaCrittersInfo, setSeaCrittersInfo] = useState({ready:false});
    const [hemisphere, setHemisphere] = useState("Northern");
    const [loaded, setLoaded] = useState(false);
    const signal = axios.CancelToken.source();

function showSeaCritters(response){
    setSeaCrittersInfo(response.data)
setLoaded(true);
}

window.addEventListener('locationchange', function(){
   signal.cancel();
})


function getSeaCritters(){
    let apiURL = "https://acnhapi.com/v1a/sea/";
    axios.get(apiURL).then(showSeaCritters);

}

function setNorthernHemisphere(){ setHemisphere("Northern")}
function setSouthernHemisphere(){ setHemisphere("Southern")}

if (loaded){return(
    <div className="getSeaCrittersInfo">
        <div className="CurrentHemisphere"><h2>Current Hemisphere: {hemisphere} </h2></div>
        <div className="buttons">
            <button  onClick={setNorthernHemisphere} className="Northern">Northern</button>
            <button onClick={setSouthernHemisphere} className="Southern">Southern</button>
        </div>
        <div className="currentlyAvailable"><h2>Sea Creatures currently available:</h2></div>
        <div className="horizontalRow">
            <div className="column">
        <SeaCrittersInfoShown data={SeaCrittersInfo[0]} location={hemisphere}/> 
        <SeaCrittersInfoShown data={SeaCrittersInfo[1]} location={hemisphere} /> 
        <SeaCrittersInfoShown data={SeaCrittersInfo[2]} location={hemisphere} />
        <SeaCrittersInfoShown data={SeaCrittersInfo[3]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[4]} location={hemisphere}/>
            </div>
            <div className="column">
        <SeaCrittersInfoShown data={SeaCrittersInfo[5]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[6]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[7]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[8]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[9]} location={hemisphere}/>
            </div>
            <div className="column">
        <SeaCrittersInfoShown data={SeaCrittersInfo[10]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[11]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[12]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[13]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[14]} location={hemisphere}/>
            </div>
            <div className="column">
        <SeaCrittersInfoShown data={SeaCrittersInfo[15]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[16]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[17]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[18]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[19]} location={hemisphere}/>
            </div>
            <div className="column">
        <SeaCrittersInfoShown data={SeaCrittersInfo[20]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[21]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[22]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[23]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[24]} location={hemisphere} />
            </div>
            <div className="column">
        <SeaCrittersInfoShown data={SeaCrittersInfo[25]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[26]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[27]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[28]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[29]} location={hemisphere}/>
            </div>
            <div className="column">
        <SeaCrittersInfoShown data={SeaCrittersInfo[30]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[31]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[32]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[33]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[34]} location={hemisphere}/>
            </div>
            <div className="column">
        <SeaCrittersInfoShown data={SeaCrittersInfo[35]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[36]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[37]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[38]} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[39]} location={hemisphere}/>
            </div>
        </div>
     </div>
    )
}
else{getSeaCritters()
    return (  
        <div className="loadingFish">
        <h1>Loading Current Sea Creatures</h1>
        <Loader
            type="Puff"
            color="#08203a"
            height={250}
            width={250}
            timeout={6000}
         />
         </div>)}}


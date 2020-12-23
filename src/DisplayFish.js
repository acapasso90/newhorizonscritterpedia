import React, {useState} from "react";
import axios from "axios";
import FishInfoShown from "./FishInfoShown.js";
import Loader from 'react-loader-spinner'


export default function DisplayFish(){
   const [fishInfo, setfishInfo] = useState({ready:false});
   const [hemisphere, setHemisphere] = useState("Northern");
    const [loaded, setLoaded] = useState(false);

function showFish(response){
setfishInfo(response.data)
setLoaded(true);
}

function getFish(){
    let apiURL = "https://acnhapi.com/v1a/fish/";
            axios.get(apiURL).then(showFish);
        }

function setNorthernHemisphere(){ setHemisphere("Northern")}
function setSouthernHemisphere(){ setHemisphere("Southern")}

if (loaded){return(
    <div className="getFishInfo">
        <div className="CurrentHemisphere"><h2>Current Hemisphere: {hemisphere} </h2></div>
        <div className="buttons">
            <button  onClick={setNorthernHemisphere} className="Northern">Northern</button>
            <button onClick={setSouthernHemisphere} className="Southern">Southern</button>
        </div>
        <div className="currentlyAvailable"><h2>Fish currently available:</h2></div>
        <div className="horizontalRow">
            <div className="column">
        <FishInfoShown data={fishInfo[0]} location={hemisphere}/> 
        <FishInfoShown data={fishInfo[1]} location={hemisphere} /> 
        <FishInfoShown data={fishInfo[2]} location={hemisphere} />
        <FishInfoShown data={fishInfo[3]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[4]} location={hemisphere}/>
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[5]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[6]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[7]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[8]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[9]} location={hemisphere}/>
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[10]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[11]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[12]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[13]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[14]} location={hemisphere}/>
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[15]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[16]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[17]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[18]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[19]} location={hemisphere}/>
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[20]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[21]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[22]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[23]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[24]} location={hemisphere} />
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[25]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[26]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[27]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[28]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[29]} location={hemisphere}/>
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[30]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[31]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[32]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[33]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[34]} location={hemisphere}/>
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[35]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[36]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[37]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[38]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[39]} location={hemisphere}/>
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[40]} location={hemisphere} />
        <FishInfoShown data={fishInfo[41]} location={hemisphere} />
        <FishInfoShown data={fishInfo[42]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[43]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[44]} location={hemisphere}/>
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[45]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[46]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[47]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[48]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[49]} location={hemisphere}/>
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[50]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[51]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[52]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[53]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[54]} location={hemisphere}/>
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[55]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[56]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[57]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[58]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[59]} location={hemisphere}/>
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[60]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[61]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[62]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[63]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[64]} location={hemisphere}/>
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[65]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[66]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[67]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[68]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[69]} location={hemisphere}/>
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[70]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[71]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[72]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[73]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[74]} location={hemisphere}/>
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[75]} location={hemisphere} />
        <FishInfoShown data={fishInfo[76]} location={hemisphere}  />
        <FishInfoShown data={fishInfo[77]} location={hemisphere}/>
        <FishInfoShown data={fishInfo[78]} location={hemisphere} />
        <FishInfoShown data={fishInfo[79]} location={hemisphere}  />
            </div>
        </div>
     </div>
    )
}
else{getFish();
return (  
<div className="loadingFish">
<h1>Loading Current Fish</h1>
<Loader
    type="Puff"
    color="#5B799B"
    height={250}
    width={250}
    timeout={6000}

 />
 </div>
);}}
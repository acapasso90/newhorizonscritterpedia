import React, {useState} from "react";
import axios from "axios";
import BugInfoShown from "./BugInfoShown.js";
import Loader from 'react-loader-spinner'


export default function DisplayBugs(){
    const [bugInfo, setbugInfo] = useState({ready:false});
    const [hemisphere, setHemisphere] = useState("Northern");
    const [loaded, setLoaded] = useState(false);

function showBugs(response){
setbugInfo(response.data)
setLoaded(true);
}
function getBugs(){
    let apiURL = "https://acnhapi.com/v1a/bugs/";
    axios.get(apiURL).then(showBugs);
}

function setNorthernHemisphere(){ setHemisphere("Northern")}
function setSouthernHemisphere(){ setHemisphere("Southern")}

if (loaded){return(
    <div className="getBugInfo">
        <div className="CurrentHemisphere"><h2>Current Hemisphere: {hemisphere} </h2></div>
        <div className="buttons">
            <button  onClick={setNorthernHemisphere} className="Northern">Northern</button>
            <button onClick={setSouthernHemisphere} className="Southern">Southern</button>
        </div>
        <div className="currentlyAvailable"><h2>Bugs currently available:</h2></div>
        <div className="horizontalRow">
            <div className="column">
        <BugInfoShown data={bugInfo[0]} location={hemisphere}/> 
        <BugInfoShown data={bugInfo[1]} location={hemisphere} /> 
        <BugInfoShown data={bugInfo[2]} location={hemisphere} />
        <BugInfoShown data={bugInfo[3]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[4]} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[5]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[6]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[7]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[8]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[9]} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[10]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[11]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[12]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[13]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[14]} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[15]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[16]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[17]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[18]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[19]} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[20]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[21]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[22]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[23]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[24]} location={hemisphere} />
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[25]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[26]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[27]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[28]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[29]} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[30]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[31]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[32]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[33]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[34]} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[35]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[36]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[37]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[38]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[39]} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[40]} location={hemisphere} />
        <BugInfoShown data={bugInfo[41]} location={hemisphere} />
        <BugInfoShown data={bugInfo[42]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[43]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[44]} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[45]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[46]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[47]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[48]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[49]} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[50]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[51]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[52]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[53]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[54]} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[55]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[56]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[57]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[58]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[59]} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[60]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[61]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[62]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[63]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[64]} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[65]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[66]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[67]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[68]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[69]} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[70]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[71]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[72]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[73]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[74]} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[75]} location={hemisphere} />
        <BugInfoShown data={bugInfo[76]} location={hemisphere}  />
        <BugInfoShown data={bugInfo[77]} location={hemisphere}/>
        <BugInfoShown data={bugInfo[78]} location={hemisphere} />
        <BugInfoShown data={bugInfo[79]} location={hemisphere}  />
            </div>
        </div>
     </div>
    )
}
else{getBugs()
    return (  
        <div className="loadingFish">
        <h1>Loading Current Bugs</h1>
        <Loader
            type="Puff"
            color="#4f963f"
            height={250}
            width={250}
            timeout={6000}
         />
         </div>
        );}}
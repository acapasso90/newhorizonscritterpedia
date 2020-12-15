import React, {useState} from "react";
import axios from "axios";
import FishInfoShown from "./FishInfoShown.js";

export default function DisplayFish(){
    const [fishInfo, setfishInfo] = useState({ready:false});
    const [ready, setReady] = useState("");
function showFish(response){
setfishInfo(response.data)
setReady(true);
}
function getFish(){
    let apiURL = "https://acnhapi.com/v1a/fish/";
    axios.get(apiURL).then(showFish);
}
if (ready){return(
    <div className="getFishInfo">
        <div className="buttons">
            <button  onClick={getFish} className="Northern">Northern</button>
            <button onClick={getFish} className="Southern">Southern</button>
        </div>
        <div className="horizontalRow">
            <div className="column">
        <FishInfoShown data={fishInfo[0]} />
        <FishInfoShown data={fishInfo[1]}  />
        <FishInfoShown data={fishInfo[2]} />
        <FishInfoShown data={fishInfo[3]} />
        <FishInfoShown data={fishInfo[4]} />
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[5]} />
        <FishInfoShown data={fishInfo[6]} />
        <FishInfoShown data={fishInfo[7]} />
        <FishInfoShown data={fishInfo[8]} />
        <FishInfoShown data={fishInfo[9]} />
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[10]} />
        <FishInfoShown data={fishInfo[11]} />
        <FishInfoShown data={fishInfo[12]} />
        <FishInfoShown data={fishInfo[13]} />
        <FishInfoShown data={fishInfo[14]} />
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[15]} />
        <FishInfoShown data={fishInfo[16]} />
        <FishInfoShown data={fishInfo[17]} />
        <FishInfoShown data={fishInfo[18]} />
        <FishInfoShown data={fishInfo[19]} />
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[20]} />
        <FishInfoShown data={fishInfo[21]} />
        <FishInfoShown data={fishInfo[22]} />
        <FishInfoShown data={fishInfo[23]} />
        <FishInfoShown data={fishInfo[24]} />
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[25]} />
        <FishInfoShown data={fishInfo[26]} />
        <FishInfoShown data={fishInfo[27]} />
        <FishInfoShown data={fishInfo[28]} />
        <FishInfoShown data={fishInfo[29]} />
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[30]} />
        <FishInfoShown data={fishInfo[31]} />
        <FishInfoShown data={fishInfo[32]} />
        <FishInfoShown data={fishInfo[33]} />
        <FishInfoShown data={fishInfo[34]} />
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[35]} />
        <FishInfoShown data={fishInfo[36]} />
        <FishInfoShown data={fishInfo[37]} />
        <FishInfoShown data={fishInfo[38]} />
        <FishInfoShown data={fishInfo[39]} />
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[40]} />
        <FishInfoShown data={fishInfo[41]} />
        <FishInfoShown data={fishInfo[42]} />
        <FishInfoShown data={fishInfo[43]} />
        <FishInfoShown data={fishInfo[44]} />
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[45]} />
        <FishInfoShown data={fishInfo[46]} />
        <FishInfoShown data={fishInfo[47]} />
        <FishInfoShown data={fishInfo[48]} />
        <FishInfoShown data={fishInfo[49]} />
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[50]} />
        <FishInfoShown data={fishInfo[51]} />
        <FishInfoShown data={fishInfo[52]} />
        <FishInfoShown data={fishInfo[53]} />
        <FishInfoShown data={fishInfo[54]} />
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[55]} />
        <FishInfoShown data={fishInfo[56]} />
        <FishInfoShown data={fishInfo[57]} />
        <FishInfoShown data={fishInfo[58]} />
        <FishInfoShown data={fishInfo[59]} />
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[60]} />
        <FishInfoShown data={fishInfo[61]} />
        <FishInfoShown data={fishInfo[62]} />
        <FishInfoShown data={fishInfo[63]} />
        <FishInfoShown data={fishInfo[64]} />
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[65]} />
        <FishInfoShown data={fishInfo[66]} />
        <FishInfoShown data={fishInfo[67]} />
        <FishInfoShown data={fishInfo[68]} />
        <FishInfoShown data={fishInfo[69]} />
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[70]} />
        <FishInfoShown data={fishInfo[71]} />
        <FishInfoShown data={fishInfo[72]} />
        <FishInfoShown data={fishInfo[73]} />
        <FishInfoShown data={fishInfo[74]} />
            </div>
            <div className="column">
        <FishInfoShown data={fishInfo[75]} />
        <FishInfoShown data={fishInfo[76]} />
        <FishInfoShown data={fishInfo[77]} />
        <FishInfoShown data={fishInfo[78]} />
        <FishInfoShown data={fishInfo[79]} />
            </div>
        </div>
     </div>
    )
}
else{  getFish()
return null;}}
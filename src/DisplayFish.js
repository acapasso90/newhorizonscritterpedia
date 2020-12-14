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
            <button  onClick={getFish}>Northern</button>
            <button onClick={getFish}>Southern</button>
        </div>
        <FishInfoShown data={fishInfo[0]} />
        <FishInfoShown data={fishInfo[1]} />
        <FishInfoShown data={fishInfo[2]} />
        <FishInfoShown data={fishInfo[4]} />
        <FishInfoShown data={fishInfo[5]} />
     </div>
    )
}
else{  getFish()
return null;}}
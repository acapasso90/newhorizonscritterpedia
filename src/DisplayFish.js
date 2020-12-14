import React, {useState} from "react";
import axios from "axios";
import FishInfoShown from "./FishInfoShown.js";

export default function DisplayFish(){
    const [fishInfo, setfishInfo] = useState({ready:false});
function showFish(response){
    const english = "name-USen";
    const cj = "-cj";
    const phrase = "catch-phrase";
    const northernArray = "month-array-northern";
    const southernArray = "month-array-southern";
    const timeArray = "time-array";
setfishInfo({ fishName: response.data[0].name[english],
    image: <img src= {response.data[0].icon_uri} alt="fishIcon" />,
    priceNormal: response.data[0].price,
    priceCJ: response.data[0].price[cj],
    catchphrase : response.data[0][phrase],
    availabilityNorth : response.data[0].availability[northernArray],
    availabilitySouth: response.data[0].availability[southernArray],
    time: response.data[0].availability[timeArray],
    allDay: response.data[0].availability.isAllDay,
    allYear: response.data[0].availability.isAllYear,
    ready: true,

})
console.log(response.data);
}
function getFish(){
    let apiURL = "https://acnhapi.com/v1a/fish/";
    axios.get(apiURL).then(showFish);
}
if (fishInfo.ready){return(
    <div className="getFishInfo">
        <div className="buttons">
            <button  onClick={getFish}>Northern</button>
            <button onClick={getFish}>Southern</button>
        </div>
        <FishInfoShown data={fishInfo} />

     </div>
    )
}
else{  getFish()
return null;}}
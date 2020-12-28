import React, {useState, useEffect} from "react";
import axios from "axios";
import BugInfoShown from "./BugInfoShown.js";
import Loader from 'react-loader-spinner'


export default function DisplayBugs(){
    const [bugInfo, setbugInfo] = useState({ready:false});
    const [hemisphere, setHemisphere] = useState("Northern");
    const [loaded, setLoaded] = useState(false);
    const cancelTokenSource = axios.CancelToken.source();
    let currentTime = new Date();
    let monthNow = currentTime.getMonth();
    let currentMonth = ++(monthNow);
 let currentHour = currentTime.getHours();
    const [hour, setHour] = useState(currentHour);
const [month, setMonth] = useState(currentMonth);
console.log(currentMonth)

let monthNames =  ["null", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
];
let hourNames =  ["Midnight-1AM", "1AM-2AM", "2AM-3AM", "3AM-4AM", "4AM-5AM", "5AM-6AM", "6AM-7AM", "7AM-8AM", "8AM-9AM", "9AM-10AM", "10AM-11AM", "11AM-Noon", "Noon-1PM",
"1PM-2PM", "2PM-3PM", "3PM-4PM", "4PM-5PM", "5PM-6PM", "6PM-7PM", "7PM-8PM", "8PM-9PM", "9PM-10PM", "10PM-11PM", "11PM-Midnight"];
let formattedHours = hourNames[hour];
let formattedMonths = monthNames[month];
function showBugs(response){
setbugInfo(response.data)
setLoaded(true);}

useEffect(() => {
    let mounted = true;
    if (mounted) {axios.get("https://acnhapi.com/v1a/bugs/", {
        cancelToken: cancelTokenSource.token
      }).then(showBugs);}
    return function cleanup() {
      mounted = false
      cancelTokenSource.cancel();
  }}, []);

if (loaded){return(
    <div className="getBugInfo">
        <div className="CurrentHemisphere"><h2>Current Hemisphere: {hemisphere} </h2></div>
        <div className="buttons">
            <div className="hrow">
                <div className="currentMonth">Selected Month: {formattedMonths} </div>
            <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Select a Month
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#" onClick={() => setMonth(1)} >January</a>
    <a className="dropdown-item" href="#" onClick={() => setMonth(2)}>February</a>
    <a className="dropdown-item" href="#" onClick={() => setMonth(3)}>March</a>
    <a className="dropdown-item" href="#" onClick={() => setMonth(4)}>April</a>
    <a className="dropdown-item" href="#" onClick={() => setMonth(5)}>May</a>
    <a className="dropdown-item" href="#" onClick={() => setMonth(6)}>June</a>
    <a className="dropdown-item" href="#" onClick={() => setMonth(7)}>July</a>
    <a className="dropdown-item" href="#" onClick={() => setMonth(8)}>August</a>
    <a className="dropdown-item" href="#" onClick={() => setMonth(9)}>September</a>
    <a className="dropdown-item" href="#" onClick={() => setMonth(10)}>October</a>
    <a className="dropdown-item" href="#" onClick={() => setMonth(11)}>November</a>
    <a className="dropdown-item" href="#" onClick={() => setMonth(12)}>December</a>
  </div>
</div>
<div className="currentTime">Selected Time: {formattedHours} </div>
            <div className="dropdown2">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Select an hour
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#" onClick={() => setHour(0)} >MIDNIGHT to 1AM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(1)}>1AM to 2AM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(2)}>2AM to 3AM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(3)}>3AM to 4AM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(4)}>4AM to 5AM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(5)}>5AM to 6AM</a>
    <a className="dropdown-item" href="#"onClick={() => setHour(6)}>6AM to 7AM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(7)}>7AM to 8AM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(8)}>8AM to 9AM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(9)}>9AM to 10AM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(10)}>10AM to 11AM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(11)}>11AM to NOON</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(12)} >NOON to 1PM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(13)}>1PM to 2PM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(14)}>2PM to 3PM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(15)}>3PM to 4PM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(16)}>4PM to 5PM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(17)}>5PM to 6PM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(18)}>6PM to 7PM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(19)}>7PM to 8PM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(20)}>8PM to 9PM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(21)}>9PM to 10PM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(22)}>10PM to 11PM</a>
    <a className="dropdown-item" href="#" onClick={() => setHour(23)}>11PM to MIDNIGHT</a>
  </div>
</div>
            <button   className="Northern" onClick={() => setHemisphere("Northern")}>Northern</button>
            <button className="Southern" onClick={() => setHemisphere("Southern")}>Southern</button>
            </div>
        </div>
        <div className="currentlyAvailable"><h2>Bugs currently available:</h2></div>
        <div className="horizontalRow">
            <div className="column">
        <BugInfoShown data={bugInfo[0]} month={month} hour={hour} location={hemisphere}/> 
        <BugInfoShown data={bugInfo[1]} month={month} hour={hour} location={hemisphere} /> 
        <BugInfoShown data={bugInfo[2]} month={month} hour={hour} location={hemisphere} />
        <BugInfoShown data={bugInfo[3]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[4]} month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[5]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[6]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[7]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[8]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[9]} month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[10]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[11]}  month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[12]}  month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[13]}  month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[14]} month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[15]} month={month} hour={hour}  location={hemisphere}/>
        <BugInfoShown data={bugInfo[16]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[17]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[18]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[19]} month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[20]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[21]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[22]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[23]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[24]} month={month} hour={hour} location={hemisphere} />
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[25]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[26]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[27]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[28]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[29]} month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[30]} month={month} hour={hour}  location={hemisphere}/>
        <BugInfoShown data={bugInfo[31]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[32]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[33]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[34]} month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[35]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[36]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[37]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[38]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[39]} month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[40]} month={month} hour={hour}  location={hemisphere} />
        <BugInfoShown data={bugInfo[41]} month={month} hour={hour} location={hemisphere} />
        <BugInfoShown data={bugInfo[42]} month={month} hour={hour}  location={hemisphere}/>
        <BugInfoShown data={bugInfo[43]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[44]} month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[45]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[46]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[47]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[48]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[49]} month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[50]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[51]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[52]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[53]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[54]} month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[55]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[56]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[57]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[58]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[59]} month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[60]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[61]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[62]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[63]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[64]} month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[65]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[66]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[67]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[68]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[69]} month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[70]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[71]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[72]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[73]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[74]} month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <BugInfoShown data={bugInfo[75]} month={month} hour={hour} location={hemisphere} />
        <BugInfoShown data={bugInfo[76]} month={month} hour={hour} location={hemisphere}  />
        <BugInfoShown data={bugInfo[77]} month={month} hour={hour} location={hemisphere}/>
        <BugInfoShown data={bugInfo[78]} month={month} hour={hour} location={hemisphere} />
        <BugInfoShown data={bugInfo[79]} month={month} hour={hour} location={hemisphere}  />
            </div>
        </div>
     </div>
    )
}
else{
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
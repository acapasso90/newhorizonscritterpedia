import React, {useState, useEffect} from "react";
import FishInfoShown from "./FishInfoShown.js";
import Loader from 'react-loader-spinner'
import axios from "axios";

export default function DisplayFish(){
    
    const [fishInfo, setfishInfo] = useState({ready:false});
    const [hemisphere, setHemisphere] = useState("Northern");
    const [loaded, setLoaded] = useState(false);
    let currentTime = new Date();
    let monthNow = currentTime.getMonth();
    let currentMonth = ++(monthNow);
    let currentHour = currentTime.getHours();
    const [hour, setHour] = useState(currentHour);
    const [month, setMonth] = useState(currentMonth);
    const cancelTokenSource = axios.CancelToken.source();

    let monthNames =  ["null", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
    ];
    let hourNames =  ["Midnight-1AM", "1AM-2AM", "2AM-3AM", "3AM-4AM", "4AM-5AM", "5AM-6AM", "6AM-7AM", "7AM-8AM", "8AM-9AM", "9AM-10AM", "10AM-11AM", "11AM-Noon", "Noon-1PM",
    "1PM-2PM", "2PM-3PM", "3PM-4PM", "4PM-5PM", "5PM-6PM", "6PM-7PM", "7PM-8PM", "8PM-9PM", "9PM-10PM", "10PM-11PM", "11PM-Midnight"];
    let formattedHours = hourNames[hour];
    let formattedMonths = monthNames[month];
// sets axios response.data as fishInfo and sets loaded status to true


   // Makes axios request for fish information then cancels request on cleanup function
    useEffect( async () => {
        let mounted = true;
        if (mounted) {
            const info = await axios.get("https://acnhapi.com/v1a/fish/", {
            cancelToken: cancelTokenSource.token
          });
            await setfishInfo(info.data);
            await setLoaded(true);
        }
        return function cleanup() {
          mounted = false
          cancelTokenSource.cancel();
      }}, []);
         
if (loaded){
    return(
        <div className="getFishInfo">
            <div className="instructions">
                <p>Shows catchable fish for the current time and month for the Northern Hemisphere. Hemisphere, Date and Time can be changed with the buttons below. Gray fish are not catchable at the current/inputted date and time, but any fish is clickable to get more information.  </p>
            </div>
            <div className="CurrentHemisphere"><h2>Current Hemisphere: <span className="currentMonth">{hemisphere}</span> </h2></div>
                <div className="buttons">
                    <div className="hrow">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select a month
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
                        <div className="dropdown2">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select an hour
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id="timeDropdown">
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
            <div className="currentlyAvailable">
                <h2>Fish available between {''}
                    <span className="currentMonth" style={{textDecoration: "underline"}} >{formattedHours}</span> in 
                    <span className="currentMonth"> {formattedMonths}</span>:
                </h2>
            </div>
            <div className="grid">
                {
                    fishInfo.map((info) => {
                        return(<FishInfoShown data={info} key={info['file-name']} location={hemisphere} month={month} hour={hour} />)
                    })
                }
            </div> 
        </div>)}

   // Returns loader spinner if app isn't loaded
    else{
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
        );
    }
}
import React, {useState, useEffect} from "react";
import axios from "axios";

import BugInfoShown from "./BugInfoShown.js";
import Loader from 'react-loader-spinner'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function DisplayBugs({
    keyword = "fish",
}){
    const [bugInfo, setbugInfo] = useState([]);
    const [hemisphere, setHemisphere] = useState("Northern");
    const cancelTokenSource = axios.CancelToken.source();
    let currentTime = new Date();
    let monthNow = currentTime.getMonth();
    let currentMonth = ++(monthNow);
     let currentHour = currentTime.getHours();
    const [hour, setHour] = useState(currentHour);
const [month, setMonth] = useState(currentMonth);


let monthNames =  ["null", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
];
let hourNames =  ["Midnight-1AM", "1AM-2AM", "2AM-3AM", "3AM-4AM", "4AM-5AM", "5AM-6AM", "6AM-7AM", "7AM-8AM", "8AM-9AM", "9AM-10AM", "10AM-11AM", "11AM-Noon", "Noon-1PM",
"1PM-2PM", "2PM-3PM", "3PM-4PM", "4PM-5PM", "5PM-6PM", "6PM-7PM", "7PM-8PM", "8PM-9PM", "9PM-10PM", "10PM-11PM", "11PM-Midnight"];
let formattedHours = hourNames[hour];
let formattedMonths = monthNames[month];

const monthArray = [{id: 1, name: "January"}, {id: 2, name: "February"}, {id: 3, name: "March"}, {id: 4, name: "April"}, {id: 5, name: "May"}, {id: 6, name: "June"}, {id: 7, name: "July"}, {id: 8, name: "August"},{id: 9, name: "September"}, {id: 10, name: "October"}, {id: 11, name: "November"}, {id: 12, name: "December"}]

const timeArray = [{id: 0, display: "MIDNIGHT to 1AM"}, {id: 1, display: "1AM to 2AM"}, {id: 2, display: "2AM to 3AM"}, {id: 3, display: "3AM to 4AM"}, {id: 4, display: "4AM to 5AM"}, {id:5 , display: "5AM to 6AM"}, {id: 6, display: "6AM to 7AM"}, {id: 7, display: '7AM to 8AM'}, {id: 8, display: '8AM to 9AM'}, {id: 9, display: '9AM to 10AM'}, {id: 10, display: "10AM to 11AM"}, {id: 11, display: "11AM to NOON"}, {id: 12, display: "NOON to 1PM"}, {id: 13, display: "1PM to 2PM"}, {id: 14, display: "2PM to 3PM"}, {id: 15, display: "3PM to 4PM"}, {id: 16, display: "4PM to 5PM"}, {id: 17, display: "5PM to 6PM"}, {display: "6PM to 7PM", id: 18}, {id: 19, display: "7PM to 8PM"}, {id: 20, display: '8PM to 9PM'}, {id: 21, display: '9PM to 10PM'}, {id: 22, display: '10PM to 11PM'}, {id: 23, display: '11PM to MIDNIGHT'}]



// Makes axios request for bug information then cancels request on cleanup function
useEffect( async () => {
    setbugInfo([]);
    let mounted = true;
    let apiUrl = "https://acnhapi.com/v1a/fish/";
    if (keyword === "bug"){
        apiUrl = "https://acnhapi.com/v1a/bugs/"
    }
    if (keyword === "deep sea creature"){
        apiUrl = "https://acnhapi.com/v1a/sea/"
    }
    if (mounted) {
        const info = await axios.get(apiUrl, {
        cancelToken: cancelTokenSource.token
      })
        setbugInfo(info.data);
    }
    return function cleanup() {
      mounted = false
      cancelTokenSource.cancel();
    }
}, [keyword]);


if (bugInfo.length > 0){return(
    <div className="getBugInfo">
            <p className="instructions">
                Shows catchable {keyword}{keyword !== "fish" ? "s" : null} for the current time and month for the Northern Hemisphere. Hemisphere, Date and Time can be changed with the buttons below. Gray {keyword}{keyword !== "fish" ? "s" : null} are not catchable at the current/inputted date and time, but any {keyword} is able to be clicked in order to get more information. 
            </p>


            <div className="text-center">
                <h2>Current Hemisphere: <span className="currentMonth">{hemisphere}</span> </h2>
            </div>

    <Row className="margin-row">
        <Col className="d-flex justify-content-center">
            <button onClick={() => setHemisphere("Northern")}>Northern</button>
        </Col>
        <Col className="d-flex justify-content-center">
            <button onClick={() => setHemisphere("Southern")}>Southern</button>
        </Col>
    </Row>
      
    <div className="text-center">
                <h2>{keyword}{keyword !== "fish" ? "s" : null} available between{" "} 
                    <span className="currentMonth" style={{textDecoration: "underline"}} >{formattedHours}</span> in <span className="currentMonth">{formattedMonths}</span>:
                </h2>
            </div>
         <Row className="margin-row">
            <Col className="d-flex justify-content-center">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select a month
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {monthArray.map((x) => {
                        return(
                            <a key={x.name} className="dropdown-item" href="#" onClick={() => setMonth(x.id)} >{x.name}</a>
                        )
                    })}
                </div>
            </Col>
            <Col className="d-flex justify-content-center">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select an hour
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id="timeDropdown">
                    {timeArray.map((x) => {
                        return(
                            <a key={x.id} className="dropdown-item" href="#" onClick={()=> setHour(x.id)}>{x.display}</a>
                        )
                    })}
                </div>
            </Col>
        </Row>
        
    <br />

    <div className={keyword === "deep sea creature" ? "sea-critter-grid" : "grid"}>
        {
            bugInfo.map((info) => {
                return(<BugInfoShown selected={info} key={info['file-name']} location={hemisphere} month={month} hour={hour} />)
            })
        }
    </div> 
</div>
)}
   // Returns loader spinner if app isn't loaded
else{
    return (  
        <div className="text-center">
            <h1>Loading Current {keyword}{keyword !== "fish" ? "s" : null}</h1>
            <Loader
                type="Puff"
                color="#4f963f"
                height={250}
                width={250}
                timeout={6000}
            />
         </div>
        )
    }
}
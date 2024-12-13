import { useState } from "react";
import {Outlet} from 'react-router-dom'
import CritterEntry from "../CritterEntry.js";
import ToggleButton from 'react-bootstrap/ToggleButton'

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import './CritterDisplay.css'

export function CritterDropdown({
    items,
    title = '',
    onSelect = () => console.log('onSelect function must be passed in')
}){
    const options = items.map((x) => 
        <Dropdown.Item key={x.id} disabled={title === x.label} value={x.label} active={title === x.label} eventKey={x.id}>
            {x.label}       
        </Dropdown.Item>
    )

    return (
        <DropdownButton drop="end" size="sm" id="dropdown-basic-button" onSelect={(e)=> onSelect(parseInt(e))} title={title}>
            {options}
        </DropdownButton>
    );
}

export function RadioButton({
    currentHemisphere = 'Northern',
    hemisphereType = 'Northern',
    setHemisphere = ()=>console.log('setHemisphere function must be passed in')

}){

    const active = currentHemisphere === hemisphereType
    return(
        <ToggleButton
            type="radio"
            name={hemisphereType}
            value={hemisphereType}
            size="sm"
            checked={active}
            disabled={active}
            onClick={() => setHemisphere(hemisphereType)}
        >
            {hemisphereType}
        </ToggleButton>
    )
}

const formatAvailability = (info, hemisphere, month, hour) => {
    const availability = hemisphere === "Northern" ? info.hemispheres.north : info.hemispheres.south;
            let monthAvailable = false;
            let timeAvailable = false;
            // if time displayed length is less than 1 bug is shown as being available All Day.
            let timeDisplayed = availability.timeArray;
            const isAllDay = timeDisplayed.length === 24;
            if (timeDisplayed.length === 24){timeDisplayed = "All Day";}
            if (isAllDay) {
                timeAvailable = true;
            }
            const allYear = availability.monthsArray === 12;
            if (allYear) {monthAvailable = true; }
            // if time includes hours timeAvailabl is set to true/
            if (timeDisplayed?.includes(hour)) { timeAvailable = true;}
            // if availability includes months then monthAvailable is set to true
            if (availability.monthsArray?.includes(month)) {monthAvailable = true;}
            return(
                {...info, timeDisplayed: timeDisplayed, monthAvailable: monthAvailable, timeAvailable: timeAvailable, availability: availability}
            )
}

export function CritterDisplay({
    data,
    keyword
}){
    const [hemisphere, setHemisphere] = useState("Northern");
    let currentTime = new Date();
    let thisMonth = currentTime.getMonth();
    thisMonth = ++(thisMonth);
    const [hour, setHour] = useState(currentTime.getHours());
    const [month, setMonth] = useState(thisMonth);

    const monthArray = [{id: 1, label: "January"}, {id: 2, label: "February"}, {id: 3, label: "March"}, {id: 4, label: "April"}, {id: 5, label: "May"}, {id: 6, label: "June"}, {id: 7, label: "July"}, {id: 8, label: "August"},{id: 9, label: "September"}, {id: 10, label: "October"}, {id: 11, label: "November"}, {id: 12, label: "December"}]

    const timeArray = [{id: 0, label: "MIDNIGHT to 1AM"}, {id: 1, label: "1AM to 2AM"}, {id: 2, label: "2AM to 3AM"}, {id: 3, label: "3AM to 4AM"}, {id: 4, label: "4AM to 5AM"}, {id:5 , label: "5AM to 6AM"}, {id: 6, label: "6AM to 7AM"}, {id: 7, label: '7AM to 8AM'}, {id: 8, label: '8AM to 9AM'}, {id: 9, label: '9AM to 10AM'}, {id: 10, label: "10AM to 11AM"}, {id: 11, label: "11AM to NOON"}, {id: 12, label: "NOON to 1PM"}, {id: 13, label: "1PM to 2PM"}, {id: 14, label: "2PM to 3PM"}, {id: 15, label: "3PM to 4PM"}, {id: 16, label: "4PM to 5PM"}, {id: 17, label: "5PM to 6PM"}, {label: "6PM to 7PM", id: 18}, {id: 19, label: "7PM to 8PM"}, {id: 20, label: '8PM to 9PM'}, {id: 21, label: '9PM to 10PM'}, {id: 22, label: '10PM to 11PM'}, {id: 23, label: '11PM to MIDNIGHT'}]

    const currentMonth = monthArray.find((x) => x.id === month)?.label;
    const currentHour = timeArray.find((x) => x.id === hour)?.label;

    // format all critters to have availability data based on hemisphere, month and hour
    const formattedCritters = data.map((info) => formatAvailability(info, hemisphere, month, hour))
    // map formatted critter data to critterinfoshown component 
    const critterData =   formattedCritters.map((info) => {       
        return(<CritterEntry selected={info} key={info.num}  />)
    })


    return(
        <div className="critter-display">
            <p className="instructions">
                Gray {keyword}{keyword !== "fish" ? "s" : null} are not catchable at the selected date and time, but any {keyword} is able to be clicked in order to get more information. 
            </p>


            <div className="d-flex justify-content-center button-row">
                    Current Hemisphere:
                    <RadioButton currentHemisphere={hemisphere} hemisphereType="Northern" setHemisphere={setHemisphere} />
                    <RadioButton currentHemisphere={hemisphere} hemisphereType="Southern" setHemisphere={setHemisphere} />
            </div>
            
            <div className="d-flex justify-content-center button-row">
                {keyword}{keyword !== "fish" ? "s" : null} available in 
                    <CritterDropdown items={monthArray} title={currentMonth} onSelect={(e) => setMonth(e)}  />
                from 
                    <CritterDropdown items={timeArray} title={currentHour} onSelect={(e) => setHour(e)}  />
            </div>


            <div className={keyword === "deep sea creature" ? "sea-critter-grid" : "grid"}>
                {critterData}
            </div> 
            <Outlet context={{critterList: formattedCritters}} />

        </div>
    )
    
}
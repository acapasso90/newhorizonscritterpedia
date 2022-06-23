import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
export default function BugInfoShown({
  selected = {},
  location = '',
  month = '',
  hour = '',
}){

  const navigate = useNavigate();
  const english = "name-USen";
  const northernArray = "month-array-northern";
  const southernArray = "month-array-southern"; 
  const timeArray = "time-array";
  let availability = location === "Northern" ? selected.availability[northernArray] : selected.availability[southernArray];
  let monthAvailable = false;
  let timeAvailable = false;
  // if time displayed length is less than 1 bug is shown as being available All Day.
  let timeDisplayed = selected.availability.time;
  if (timeDisplayed.length < 1){timeDisplayed = "All Day";}
  let name = selected.name[english];
  let image = selected.icon_uri;
  let allDay = selected.availability.isAllDay;
  if (allDay === true) {
      timeAvailable = true;
  }
  let allYear = selected.availability.isAllYear;
  if (allYear === true) {monthAvailable = true; }
  let time = selected.availability[timeArray];
  // if time includes hours timeAvailabl is set to true/
  if (time.includes(hour)) { timeAvailable = true;}
  // if availability includes months then monthAvailable is set to true
  if (availability.includes(month)) {monthAvailable = true;}



return(
  <div className="BugInfo" onClick={() => navigate(`${name}`)}>
    {monthAvailable === true && timeAvailable === true ?   
      <img src={image} alt="bug icon" className="fishPicture"  />  :   
      <img src={image} alt="bug icon" className="fishPicture2"  /> 
    }
    <Outlet context={{selected: selected, availability: availability}} />
</div>
)

}
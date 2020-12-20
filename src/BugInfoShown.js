import React, {useState} from "react";
import Blathers from "./Blathers.png";

export default function BugInfoShown(props){
    const english = "name-USen";
    const flick = "price-flick";
    const phrase = "catch-phrase";
    const blathersPhrase = "museum-phrase";
    const northernArray = "month-array-northern";
    const southernArray = "month-array-southern"; 
    const northernMonths = "month-northern";
    const southernMonths = "month-southern";
    const timeArray = "time-array";
    const infoShownStyle = {
        lineHeight: "normal",
        opacity: "100%",
        backgroundColor: "#F5EBC1",
        zIndex: 2,
        width: "413px",
        height: "180px",
        textTransform: "capitalize",
        border: "3px",
        borderColor: "#7a3737",
        paddingRight: "50px",
        borderStyle: "solid",
  position: "absolute",
 marginLeft: "100px",      };
      const infoHiddenStyle = {
        lineHeight: "0px",
        width: "0px",
        height: "0px",
        opacity: "0%"
      };
      const [style, SetStyle] = useState(infoHiddenStyle);
      const [id, SetId] = useState("inactive");
        let worldLocation = props.location;
    let availability = null; 
    let monthAvailable = null;
    let timeAvailable = null; 
    let timeDisplayed = props.data.availability.time;
    if (timeDisplayed.length < 1){timeDisplayed = "All Day";}
    let displayAvailabilty = null;
    if (worldLocation === "Northern"){availability = props.data.availability[northernArray];
    displayAvailabilty = props.data.availability[northernMonths]}
    else {availability = props.data.availability[southernArray];
        displayAvailabilty = props.data.availability[southernMonths];}
    let findLocation = props.data.availability.location;
    let rarity = props.data.availability.rarity;
    let bugName = props.data.name[english];
       let image = props.data.icon_uri;
       let realisticImage = props.data.image_uri;
        let priceNormal = props.data.price;
       let  priceflick = props.data[flick];
      let  catchphrase = props.data[phrase];
      let blathers = props.data[blathersPhrase];
        let allDay = props.data.availability.isAllDay;
        if (allDay === true){timeAvailable = true;}
        let allYear = props.data.availability.isAllYear;    
        if (allYear === true){monthAvailable = true;}
        let time = props.data.availability[timeArray];
    let currentTime = new Date();
    let month = currentTime.getMonth();
    let hours = currentTime.getHours();
    if (time.includes(hours)){timeAvailable = true;}
    if (availability.includes(month)){monthAvailable = true;} 

    function DisplayBugInfo(){
        let active = document.getElementById('active');
        if(active){SetStyle(infoHiddenStyle);
            SetId("inactive");}
    else {SetStyle(infoShownStyle);
        SetId("active");
}
    ;}   

if (monthAvailable === true && timeAvailable === true)
{return(
        <div className="BugInfo">
            <div className="bugImage" onClick={DisplayBugInfo}> 
            <img src={image} alt="bug icon" className="fishPicture" />
            <div className="bugInfoHidden" style={style} id={id} >
<ul>
<li> <img src={realisticImage} alt="bug realistic" className="fishRealistic" /></li>
    <li>Name: {bugName}</li>
    <li>Location: {findLocation}</li>
    <li> Time Available: {timeDisplayed} </li>
    <li> Rarity: {rarity}</li>
    <li>Price: {priceNormal} bells</li>
    <li>Flick Price: {priceflick} bells</li>
    <li>"{catchphrase}"</li>
    <li><img src={Blathers} alt="Blathers" ></img>"{blathers}"</li>
</ul>

</div>
            </div>
        </div>

    )
    }
    else {return(
        <div className="BugInfo" >
            <div className="bugImage" onClick={DisplayBugInfo}> 
            <img src={image} alt="bug icon" className="fishPicture2" onClick={DisplayBugInfo} />
            <div className="bugInfoHidden" style={style} id={id} >
<ul>
<li> <img src={realisticImage} alt="bug realistic" className="fishRealistic" /></li>
    <li>Name: {bugName}</li>
    <li>Location: {findLocation}</li>
    <li> Time Available: {timeDisplayed} </li>
    <li> Rarity: {rarity}</li>
    <li>Price: {priceNormal} bells</li>
    <li>Flick Price: {priceflick} bells</li>
    <li>"{catchphrase}"</li>
    <li><img src={Blathers} alt="Blathers" ></img>"{blathers}"</li>
</ul>

</div>
            </div>
        </div>
    )}}

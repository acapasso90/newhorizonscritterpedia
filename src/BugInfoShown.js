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
    const blathersStyle = {maxWidth: "340px",
    marginTop: "120px",}
    const infoShownStyle = {
      lineHeight: "normal",
      opacity: "100%",
      backgroundColor: "#F5EBC1",
      zIndex: 2,
      textTransform: "capitalize",
      border: "4px",
      borderColor: "#7a3737",
      paddingRight: "50px",
      borderStyle: "solid",
      position: "absolute",
      top: "-255px",
      left: "-6px",
    };
    const infoHiddenStyle = {
      lineHeight: "0px",
      width: "0px",
      height: "0px",
      opacity: "0%",
      position: "absolute",
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
        let displayMonths = null;
        const months= ["January","February","March","April","May","June","July",
        "August","September","October","November","December"];
if (allYear === false && displayAvailabilty.length <= 2){   var array = displayAvailabilty.split('-');
  var a = parseInt(array[0]);
  let formattedA = months[a];
  displayMonths = `${formattedA}`;}
  else if  (allYear === true ){     displayMonths = `All Year`;}
  else if (allYear === false && displayAvailabilty.length > 2){displayMonths = displayAvailabilty}
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
}}   

if (monthAvailable === true && timeAvailable === true)
{return(
        <div className="BugInfo">
            <div className="bugImage" onClick={DisplayBugInfo}> 
            <img src={image} alt="bug icon" className="fishPicture" />        </div>
            <div className="left">
            <div className="bugInfoHidden" style={style} id={id} >
            <div className="row">
                <div className="column">
<ul>
<li className="quote">&quot;{catchphrase}&quot;</li>
<li> <img src={realisticImage} alt="bug realistic" className="fishRealistic" /></li>
<li><div className="polaroidBug"></div></li>
<li className="bugName">{bugName}</li>
    <li>Location: {findLocation}</li>
    <li> Time Available: {timeDisplayed} </li>
    <li> Months Available: {displayMonths} </li>
    <li> Rarity: {rarity}</li>
    <li>Price: {priceNormal} bells</li>
    <li>Flick Price: {priceflick} bells</li>
</ul>
</div>
              <div className="column">
              <img src={Blathers} alt="Blathers" className="Blathers" style={blathersStyle} />
              <div className="quoteTriangle"></div>
              <div className="blathersInfo" >&quot;{blathers}&quot;</div>
              <div className="exitButton"><button onClick={DisplayBugInfo}>Go Back</button></div>
              </div>
              </div>
            </div>
</div>
        </div>
    )
    }
    else {return(
        <div className="BugInfo" >
            <div className="bugImage" onClick={DisplayBugInfo}> 
            <img src={image} alt="bug icon" className="fishPicture2"  />        </div>
            <div className="left">
            <div className="bugInfoHidden" style={style} id={id} >
            <div className="row">
                <div className="column">
<ul>
<li className="quote">&quot;{catchphrase}&quot;</li>
<li> <img src={realisticImage} alt="bug realistic" className="fishRealistic" /></li>
<li><div className="polaroidBug"></div></li>
<li className="bugName">{bugName}</li>
    <li>Location: {findLocation}</li>
    <li> Time Available: {timeDisplayed} </li>
    <li> Months Available: {displayMonths} </li>
    <li> Rarity: {rarity}</li>
    <li>Price: {priceNormal} bells</li>
    <li>Flick Price: {priceflick} bells</li>
</ul>
</div>
              <div className="column">
              <img src={Blathers} alt="Blathers" className="Blathers" style={blathersStyle} />
              <div className="quoteTriangle"></div>
              <div className="blathersInfo" >&quot;{blathers}&quot;</div>
              <div className="exitButton"><button onClick={DisplayBugInfo}>Go Back</button></div>
              </div>
              </div>
            </div>
</div>
</div>
    )}}

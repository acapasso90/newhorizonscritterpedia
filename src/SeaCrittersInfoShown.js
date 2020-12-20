import React, {useState} from "react";
import Blathers from "./Blathers.png";

export default function SeaCrittersInfoShown(props){
    const english = "name-USen";
    const phrase = "catch-phrase";
    const blathersPhrase = "museum-phrase";
    const northernArray = "month-array-northern";
    const southernArray = "month-array-southern"; 
    //const northernMonths = "month-northern";
   // const southernMonths = "month-southern";
    const timeArray = "time-array";
    const blathersStyle = {maxWidth: "340px",
    marginTop: "120px",}
    const infoShownStyle = {
      lineHeight: "normal",
      opacity: "100%",
      backgroundColor: "#F5EBC1",
      zIndex: 2,
      width: "413px",
      height: "160px",
      textTransform: "capitalize",
      border: "3px",
      borderColor: "#7a3737",
      paddingRight: "50px",
      borderStyle: "solid",
      position: "absolute",
      marginLeft: "100px"
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
  //  let displayAvailabilty = null;
    if (worldLocation === "Northern"){availability = props.data.availability[northernArray];
  //  displayAvailabilty = props.data.availability[northernMonths]}
    }else {availability = props.data.availability[southernArray];}
  //     displayAvailabilty = props.data.availability[southernMonths];}
    let SeaCrittersName = props.data.name[english];
       let image = props.data.icon_uri;
       let realisticImage = props.data.image_uri;
        let priceNormal = props.data.price;
       let  speed = props.data.speed;
       let shadow = props.data.shadow;
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

    function DisplaySeaCrittersInfo(){
        let active = document.getElementById('active');
        if(active){SetStyle(infoHiddenStyle);
            SetId("inactive");}
    else {SetStyle(infoShownStyle);
        SetId("active");
}}   

if (monthAvailable === true && timeAvailable === true) {
  return (
    <div className="SeaCrittersInfo">
      <div className="SeaCrittersImage" onClick={DisplaySeaCrittersInfo}>
        <img src={image} alt="SeaCritters icon" className="fishPicture" />
        <div className="left">
          <div className="SeaCrittersInfoHidden" style={style} id={id}>
            <ul>
            <li> <img src={realisticImage} alt="sea realistic" className="fishRealistic" /></li>
    <li>{SeaCrittersName}</li>
    <li> Time Available: {timeDisplayed} </li>
    <li>Price: {priceNormal} bells</li>
    <li>Speed: {speed} </li>
    <li>Shadow: {shadow} </li>
    <li>&quot;{catchphrase}&quot;</li>
    <li> 
                <img src={Blathers} alt="Blathers" className="Blathers" style={blathersStyle} /><div className="blathersInfo" >&quot;{blathers}&quot;</div>
                </li>
            </ul>
          </div>
</div>
</div>
      </div>
  );
} else {
  return (
    <div className="SeaCrittersInfo">
      <div className="SeaCrittersImage" onClick={DisplaySeaCrittersInfo}>
        <img
          src={image}
          alt="SeaCritters icon"
          className="fishPicture2"
          onClick={DisplaySeaCrittersInfo}
        />
        <div className="left">
        <div className="SeaCrittersInfoHidden" style={style} id={id}>
            <ul>
            <li> <img src={realisticImage} alt="sea realistic" className="fishRealistic" /></li>
    <li>{SeaCrittersName}</li>
    <li> Time Available: {timeDisplayed} </li>
    <li>Price: {priceNormal} bells</li>
    <li>Speed: {speed} </li>
    <li>Shadow: {shadow} </li>
    <li>&quot;{catchphrase}&quot;</li>
    <li> 
                <img src={Blathers} alt="Blathers" className="Blathers" style={blathersStyle} /><div className="blathersInfo" >&quot;{blathers}&quot;</div>
                </li>
            </ul>
          </div>
</div>
</div>
      </div>
  );
}
}

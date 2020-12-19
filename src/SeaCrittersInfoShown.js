import React, {useState} from "react";

export default function SeaCrittersInfoShown(props){
    const english = "name-USen";
    const phrase = "catch-phrase";
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
        lineHeight: "0",
        opacity: "0%",
        width: "0px",
        height: "0px",
        position: "absolute",
      };
      const infoShownStyleRight = {
        lineHeight: "normal",
        opacity: "100%",
        backgroundColor: "#F5EBC1",
        zIndex: 2,
        width: "413px",
        height: "180px",
        textTransform: "capitalize",
        border: "3px",
        borderColor: "#7a3737",
        borderStyle: "solid",
        position: "absolute",
  left: "182px",
  paddingRight: "50px"
      };
      const [style, SetStyle] = useState(infoHiddenStyle);
      const [id, SetId] = useState("inactive");
        let worldLocation = props.location;
        let SeaCrittersnumber = props.data.id;
    let availability = null; 
    let monthAvailable = null;
    let timeAvailable = null; 
    let displayAvailabilty = null;
    if (worldLocation === "Northern"){availability = props.data.availability[northernArray];
    displayAvailabilty = props.data.availability[northernMonths]}
    else {availability = props.data.availability[southernArray];
        displayAvailabilty = props.data.availability[southernMonths];}
    let findLocation = props.data.availability.location;
    let SeaCrittersName = props.data.name[english];
       let image = props.data.icon_uri;
        let priceNormal = props.data.price;
       let  speed = props.data.speed;
       let shadow = props.data.shadow;
      let  catchphrase = props.data[phrase];
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
            else if (SeaCrittersnumber >= 20) {SetStyle(infoShownStyleRight);
                SetId("active");
}
    else {SetStyle(infoShownStyle);
        SetId("active");
}
    ;}   

if (monthAvailable === true && timeAvailable === true)
{return(
        <div className="SeaCrittersInfo">
            <div className="SeaCrittersImage" onClick={DisplaySeaCrittersInfo}> 
            <img src={image} alt="SeaCritters icon" className="fishPicture" />
            <div className="left">
            <div className="SeaCrittersInfoHidden" style={style} id={id} >
<ul>
    <li>Name: {SeaCrittersName}</li>
    <li>Location: {findLocation}</li>
    <li>Months Available: {displayAvailabilty} </li>
    <li>Price: {priceNormal} bells</li>
    <li>Speed: {speed} </li>
    <li>Shadow: {shadow} </li>
    <li>"{catchphrase}"</li>
</ul>

</div>
            </div>
        </div>
        </div>
    )
    }
    else {return(
        <div className="SeaCrittersInfo" >
            <div className="SeaCrittersImage" onClick={DisplaySeaCrittersInfo}> 
            <img src={image} alt="SeaCritters icon" className="fishPicture2" onClick={DisplaySeaCrittersInfo} />
            <div className="left">
            <div className="SeaCrittersInfoHidden" style={style} id={id} >
<ul>
    <li>Name: {SeaCrittersName}</li>
    <li>Location: {findLocation}</li>
    <li>Months Available: {displayAvailabilty} </li>
    <li>Price: {priceNormal} bells</li>
    <li>Speed: {speed} </li>
    <li>Shadow: {shadow} </li>
    <li>"{catchphrase}"</li>
</ul>

</div>
            </div>
        </div>
        </div>
    )}}
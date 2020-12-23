import React, { useState } from "react";
import Blathers from "./Blathers.png";
import Months from "./Months.js"

export default function FishInfoShown(props) {
  const english = "name-USen";
  const cj = "price-cj";
  const phrase = "catch-phrase";
  const blathersPhrase = "museum-phrase";
  const northernArray = "month-array-northern";
  const southernArray = "month-array-southern";
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
  if (worldLocation === "Northern") {
    availability = props.data.availability[northernArray];} else {
    availability = props.data.availability[southernArray];}
  let findLocation = props.data.availability.location;
  let rarity = props.data.availability.rarity;
  let realisticImage = props.data.image_uri;
  let fishName = props.data.name[english];
  let image = props.data.icon_uri;
  let priceNormal = props.data.price;
  let priceCJ = props.data[cj];
  let catchphrase = props.data[phrase];
  let blathers = props.data[blathersPhrase];
  let allDay = props.data.availability.isAllDay;
  if (allDay === true) {
    timeAvailable = true;
  }
  let allYear = props.data.availability.isAllYear;
  if (allYear === true) {
    monthAvailable = true;
  }
  let time = props.data.availability[timeArray];
let currentTime = new Date();
let month = currentTime.getMonth();
let hours = currentTime.getHours();
if (time.includes(hours)){timeAvailable = true;}
if (availability.includes(month)){monthAvailable = true;} 

  function DisplayFishInfo(){
    let active = document.getElementById('active');
    if(active){SetStyle(infoHiddenStyle);
        SetId("inactive");}
else {SetStyle(infoShownStyle);
    SetId("active");
}}   


  if (monthAvailable === true && timeAvailable === true) {return(
    <div className="FishInfo">
    <div className="fishImage" onClick={DisplayFishInfo}>
      <img src={image} alt="fish icon" className="fishPicture" onClick={DisplayFishInfo} />      </div>
      <div className="left">
        <div className="fishInfoHidden" style={style} id={id}>
        <div className="row">
<div className="column">
<Months key={availability} />
    </div>
<div className="row">
  <div className="column">
  <ul>
<li> <img src={realisticImage} alt="bug realistic" className="fishRealistic" /></li>
<li><div className="polaroid"></div></li>
<li className="bugName">{fishName}</li>
<li className="quote">&quot;{catchphrase}&quot;</li>
</ul>   </div>
<div className="right">
<div className="columnRight">
<ul>
<li>Location: {findLocation}</li>
<li> Time Available: {timeDisplayed} </li>
<li> Rarity: {rarity}</li>
<li>Price: {priceNormal} bells</li>
                <li>CJ Price: {priceCJ} bells</li>
                </ul>
</div>
</div>
</div>
   <div className="column">
              <img src={Blathers} alt="Blathers" className="Blathers" style={blathersStyle} />
              <div className="quoteTriangle"></div>
              <div className="blathersInfo" >&quot;{blathers}&quot;</div>
              <div className="exitButton"><button  onClick={DisplayFishInfo}>Go Back</button></div>
              </div>
    </div>
  </div>
</div>
</div>);
  } else {
    return (
      <div className="FishInfo">
        <div className="fishImage" onClick={DisplayFishInfo}>
          <img
            src={image}
            alt="fish icon"
            className="fishPicture2"
            onClick={DisplayFishInfo}
          />         </div>
          <div className="left">
          <div className="fishInfoHidden" style={style} id={id}>
    <div className="row">
<div className="column">
   <Months key={availability} />
</div>
      <div className="row">
      <div className="column">
              <ul>
              <li> <img src={realisticImage} alt="fish realistic" className="fishRealistic" /></li>
              <li><div className="polaroid"></div></li>
              <li className="fishName">{fishName}</li>
              <li className="quote">&quot;{catchphrase}&quot;</li>
               </ul>
               </div>
               <div className="right">
<div className="columnRight">
               <ul>
                <li>Location: {findLocation}</li>
                <li> Time Available: {timeDisplayed} </li>
    <li> Rarity: {rarity}</li>
                <li>Price: {priceNormal} bells</li>     
                <li>CJ Price: {priceCJ} bells</li>
                </ul>
                </div>
</div>
</div>
   <div className="column">
              <img src={Blathers} alt="Blathers" className="Blathers" style={blathersStyle} />
              <div className="quoteTriangle"></div>
              <div className="blathersInfo" >&quot;{blathers}&quot;</div>
              <div className="exitButton"><button  onClick={DisplayFishInfo}>Go Back</button></div>
              </div>
    </div>
  </div>
</div>
</div>
    );
  }
}

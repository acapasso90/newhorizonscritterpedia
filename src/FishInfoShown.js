import React, { useState} from "react";

export default function FishInfoShown(props) {
  const unavailable = {
    opacity: "50%",
    textDecoration: "line-through",
  };
  const available = {opacity: "100%",
  textDecoration: "none",
  fontWeight: "bold",
  minHeight: "40px",
  textShadow: "1px 2px 5px #8b5105",
  borderWidth: "3px",
  borderStyle: "solid",
  borderColor: "#702B2B",
  backgroundColor: "#da8f4d",
  borderRadius: "2px",
  color: "#440f0f",
  }
  const bold = {fontSize: "24px",
fontWeight: "bold"}
//Styles for months in infoStyleHidden
const [janStyle, setJanStyle] = useState(unavailable);
const [febStyle, setFebStyle] = useState(unavailable);
const [marStyle, setMarStyle] = useState(unavailable);
const [aprStyle, setAprStyle] = useState(unavailable);
const [mayStyle, setMayStyle] = useState(unavailable);
const [junStyle, setJunStyle] = useState(unavailable);
const [julStyle, setJulStyle] = useState(unavailable);
const [augStyle, setAugStyle] = useState(unavailable);
const [sepStyle, setSepStyle] = useState(unavailable);
const [octStyle, setOctStyle] = useState(unavailable);
const [novStyle, setNovStyle] = useState(unavailable);
const [decStyle, setDecStyle] = useState(unavailable);

  const english = "name-USen";
  const cj = "price-cj";
  const phrase = "catch-phrase";
  const northernArray = "month-array-northern";
  const southernArray = "month-array-southern";
  const timeArray = "time-array";
  const infoShownStyle = {
    display: "inherit",
    backgroundColor: "#F5EBC1",
    zIndex: 2,
    textTransform: "capitalize",
    border: "4px",
    borderColor: "#7a3737",
    paddingRight: "50px",
    borderStyle: "solid",
  };
  const infoHiddenStyle = {
    display: "none",
  };
  const [style, SetStyle] = useState(infoHiddenStyle);
  const [id, SetId] = useState("inactive");
  let worldLocation = props.location;
  let availability = null;
  let monthAvailable = null;
  let timeAvailable = null;
        // if time displayed length is less than 1 fish is shown as being available All Day.
  let timeDisplayed = props.data.availability.time;
  if (timeDisplayed.length < 1){timeDisplayed = `All Day`;}
        // shows Northern months for availibility when World Location is Northern.
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
  let allDay = props.data.availability.isAllDay;
  if (allDay === true) {
    timeAvailable = true;}
  let allYear = props.data.availability.isAllYear;
  if (allYear === true) {
    monthAvailable = true;}
  let time = props.data.availability[timeArray];
  let currentTime = new Date();
  let javamonth = currentTime.getMonth();
     // adds 1 to the javamonth value to match API months by starting at 1 instead of 0
  let month = ++(javamonth);
   let inputMonth = props.month;
let inputHour = props.hour;
// if inputMonth is sent through props then month becomes the inputMonth value
if (inputMonth != null){month = inputMonth}
 let hours = currentTime.getHours();
  // if inputHour is sent through props then month becomes the inputMonth value
 if (inputHour != null){hours = inputHour}
 // if time includes hours timeAvailabl is set to true
if (time.includes(hours)) { timeAvailable = true;}
// if availability includes months then monthAvailable is set to true
 if (availability.includes(month)) {monthAvailable = true;}

 // sets the Months in the infoHiddenStyle to active if they are included in availability or if allYear is true. 
function ShowMonths(){ if (allYear === true) {setJanStyle(available), setFebStyle(available), setMarStyle(available), setJunStyle(available), setJulStyle(available)
  setAugStyle(available); setSepStyle(available), setOctStyle(available), setNovStyle(available), setDecStyle(available);} 
  else { if(availability.includes(1)){setJanStyle(available);}
    if(availability.includes(2)){setFebStyle(available);}
    if(availability.includes(3)){setMarStyle(available);}
   if(availability.includes(4)){setAprStyle(available);}
   if(availability.includes(5)){setMayStyle(available);}
   if(availability.includes(6)){setJunStyle(available);}
   if(availability.includes(7)){setJulStyle(available);}
   if(availability.includes(8)){setAugStyle(available);}
   if(availability.includes(9)){setSepStyle(available);}
   if(availability.includes(10)){setOctStyle(available);}
   if(availability.includes(11)){setNovStyle(available);}
   if(availability.includes(12)){setDecStyle(available);}}

   }  

// if already in previously active state, makes inactive and sets style to infoHiddenStyle and backdropBlack also gets hidden. Otherwise sets to active and sets style to infoShownStyle
// and calls ShowMonths function to show active months. backdropblack is displayed.
  function DisplayFishInfo(){
    let active = document.getElementById('active');
    const backdrop = document.querySelector('.backdropBlack');
    const noScroll = document.querySelector('html');
    if(active){SetStyle(infoHiddenStyle);
        SetId("inactive");
        backdrop.classList.remove('backdropBlackActive');
        noScroll.classList.remove('noScroll');
      }
else {SetStyle(infoShownStyle);
    SetId("active");
    backdrop.classList.add('backdropBlackActive');
    noScroll.classList.add('noScroll');
    ShowMonths(); }}   


// if fish is available in the month AND time requested, the bug image is colored in on the app
  if (monthAvailable === true && timeAvailable === true) {return( 
    <div className="FishInfo">
    <div className="fishImage" onClick={DisplayFishInfo}>
      <img src={image} alt="fish icon" className="fishPicture" onClick={DisplayFishInfo} />      </div>
      <div className="left">
        <div className="fishInfoHidden" style={style} id={id}>

<div className="Months">
<div className="hrow">
    <div className="months">
    <h4 className="monthsHeader"> Months Available</h4>
    <div className="months1">
    <p className="Jan"  style={janStyle}>January</p>
      <p className="Feb" style={febStyle} >February</p>
      <p className="Mar"  style={marStyle}>March</p>
      <p className="Apr"  style={aprStyle}>April</p>
      <p className="May"  style={mayStyle} >May</p>
      <p className="Jun"  style={junStyle}>June</p>
      </div>
      <div className="months2">
      <p className="Jul" style={julStyle}>July</p>
      <p className="Aug" style={augStyle} >August</p>
      <p className="Sep" style={sepStyle}>September</p>
      <p className="Oct" style={octStyle}>October</p>
      <p className="Nov" style={novStyle}>November</p>
      <p className="Dec"style={decStyle} >December</p>
      </div>
  </div>
  <div className="exitButton"><button  onClick={DisplayFishInfo}>Go Back</button></div>
  </div>
    </div>
<div className="hrow">
  <div className="column">
  <ul className="unorderedList">
<li> <img src={realisticImage} alt="fish realistic" className="fishRealistic" /></li>
<li className="fishName">{fishName}</li>
<li className="quote">&quot;{catchphrase}&quot;</li>
</ul>   </div>
<div className="right">
<div className="columnRight">
    <ul>
    <li className="location"><span style={bold}>Location</span> <br />{findLocation}</li>
<li className="rarity"> <span style={bold}>Rarity </span> <br /> {rarity}</li>
<li className="price"><span style={bold}>Price</span> <br /> {priceNormal} bells</li>
<li className="CJprice"><span style={bold}>CJ Price </span><br /> {priceCJ} bells</li>
<li className="timeFound"><span style={bold}>Time Found </span><br /> {timeDisplayed} </li>
    </ul>
</div>
</div>
</div>
    </div>
  </div>
</div>);
  } 
  // fish is grayed out on app because it is not available this month or time
  else {
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

<div className="Months">
<div className="hrow">
    <div className="months">
    <h4 className="monthsHeader"> Months Available</h4>
    <div className="months1">
    <p className="Jan"  style={janStyle}>January</p>
      <p className="Feb" style={febStyle} >February</p>
      <p className="Mar"  style={marStyle}>March</p>
      <p className="Apr"  style={aprStyle}>April</p>
      <p className="May"  style={mayStyle} >May</p>
      <p className="Jun"  style={junStyle}>June</p>
      </div>
      <div className="months2">
      <p className="Jul" style={julStyle}>July</p>
      <p className="Aug" style={augStyle} >August</p>
      <p className="Sep" style={sepStyle}>September</p>
      <p className="Oct" style={octStyle}>October</p>
      <p className="Nov" style={novStyle}>November</p>
      <p className="Dec"style={decStyle} >December</p>
      </div>
  </div>
  <div className="exitButton"><button  onClick={DisplayFishInfo}>Go Back</button></div>
</div>
      <div className="hrow">
      <div className="column">
      <ul className="unorderedList">
              <li> <img src={realisticImage} alt="fish realistic" className="fishRealistic" /></li>
              <li className="fishName">{fishName}</li>
              <li className="quote">&quot;{catchphrase}&quot;</li>
               </ul>
               </div>
               <div className="right">
<div className="columnRight">
               <ul>
               <li className="location"><span style={bold}>Location</span> <br />{findLocation}</li>
<li className="rarity"> <span style={bold}>Rarity </span> <br /> {rarity}</li>
<li className="price"><span style={bold}>Price</span> <br /> {priceNormal} bells</li>
<li className="CJprice"><span style={bold}>CJ Price </span><br /> {priceCJ} bells</li>
<li className="timeFound"><span style={bold}>Time Found </span><br /> {timeDisplayed} </li>
                </ul>
                </div>
</div>
</div>
    </div>
  </div>
  </div>
</div>

    );
  }
}

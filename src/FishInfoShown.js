import React from "react";

export default function FishInfoShown(props){
    const english = "name-USen";
    const cj = "price-cj";
    const phrase = "catch-phrase";
    const northernArray = "month-array-northern";
    const southernArray = "month-array-southern";
    const timeArray = "time-array";
        let worldLocation = props.location;
    let availability = null; 
    let monthAvailable = null;
    let timeAvailable = null; 
    if (worldLocation === "Northern"){availability = props.data.availability[northernArray];}
    else {availability = props.data.availability[southernArray];}
    let findLocation = props.data.location;
    let fishName = props.data.name[english];
       let image = props.data.icon_uri;
        let priceNormal = props.data.price;
       let  priceCJ = props.data[cj];
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

 
function DisplayFishInfo(){return(   <div className="fishInfoDisplayed">
<ul>
    <li>Name: {fishName}</li>
    <li>Location: {findLocation}</li>
    <li>Hours: {time} </li>
    <li>Price: {priceNormal}</li>
    <li>CJ Price: {priceCJ}</li>
    <li>"{catchphrase}"</li>
</ul>

</div>);    
}

if (monthAvailable === true && timeAvailable === true)
{return(
        <div className="FishInfo">
            <div className="fishImage" onClick={DisplayFishInfo}> 
            <img src={image} alt="fish icon" className="fishPicture" />
        </div>
        </div>
    )
    }
    else {return(
        <div className="FishInfo">
            <div className="fishImage" onClick={DisplayFishInfo}> 
            <img src={image} alt="fish icon" className="fishPicture2" />
        </div>
        </div>
    )}}
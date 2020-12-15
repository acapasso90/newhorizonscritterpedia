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
    if (worldLocation === "Northern"){availability = props.data.availability[northernArray];}
    else {availability = props.data.availability[southernArray];}
    let findLocation = props.data.location;
    let fishName = props.data.name[english];
       let image = props.data.icon_uri;
        let priceNormal = props.data.price;
       let  priceCJ = props.data.[cj];
      let  catchphrase = props.data[phrase];
        let time = props.data.availability[timeArray];
        let allDay = props.data.availability.isAllDay;
        let allYear = props.data.availability.isAllYear;    
    let currentTime = new Date();
    let month = currentTime.getMonth();
    let hours = currentTime.getHours();
return(
    <div className="FishInfo">
        <div className="fishImage"> 
        <img src={image} alt="fish icon" />
    </div>
    </div>
)
}
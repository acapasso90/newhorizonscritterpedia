import React from "react";

export default function FishInfoShown(props){
    const english = "name-USen";
    const cj = "-cj";
    const phrase = "catch-phrase";
    const northernArray = "month-array-northern";
    const southernArray = "month-array-southern";
    const timeArray = "time-array";
    let fishName = props.data.name[english];
       let image = props.data.icon_uri;
        let priceNormal = props.data.price;
       let  priceCJ = props.data.price[cj];
      let  catchphrase = props.data[phrase];
       let availabilityNorth = props.data.availability[northernArray];
        let availabilitySouth = props.data.availability[southernArray];
        let time = props.data.availability[timeArray];
        let allDay = props.data.availability.isAllDay;
        let allYear = props.data.availability.isAllYear;    
    
return(
    <div className="FishInfo">
        <div className="songImage"> 
        <img src={image} alt="fish icon" />
    </div>
    </div>
)
}
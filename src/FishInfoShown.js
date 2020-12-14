import React from "react";

export default function FishInfoShown(props){
return(
    <div className="FishInfo">
        <div className="songImage">{props.data.image}</div>
    </div>
)
}
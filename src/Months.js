import React from "react";

export default function Months(props){
console.log(props)
    return(<div className="Months">
    <div className="months">
    <h4 className="monthsHeader"> Months Available</h4>
   <p className="Jan" >January</p>
      <p className="Feb" >February</p>
      <p className="Mar" >March</p>
      <p className="Apr" >April</p>
      <p className="May" >May</p>
      <p className="Jun" >June</p>
      </div>
      <div className="months2">
      <p className="Jul" >July</p>
      <p className="Aug" >August</p>
      <p className="Sep" >September</p>
      <p className="Oct" >October</p>
      <p className="Nov" >November</p>
      <p className="Dec" >December</p>
  </div>
  </div>)
}
import React from "react";
import DisplayFish from "./DisplayFish.js";
import MediaQuery from 'react-responsive'

export default function DisplayFishApp(){return(
<div className="App">
<header className="header">
  <div className="mobile">
<MediaQuery maxDeviceWidth={410}>
  <DisplayFish />
  </MediaQuery>
  </div>
  <div className="tablet">
<MediaQuery minDeviceWidth={411} maxDeviceWidth={1025}>
<DisplayFish />
  </MediaQuery>
  </div>
  <div className="pc">
<MediaQuery minDeviceWidth={1026}>
  <DisplayFish />
  </MediaQuery>
  </div>
</header>
</div>)}
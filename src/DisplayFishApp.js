import React from "react";
import DisplayFish from "./DisplayFish.js";
import MediaQuery from 'react-responsive'

// Sets MediaQueries and DisplaysFish
export default function DisplayFishApp(){return(
<div className="App">
<header className="header">
  <div className="mobile">
<MediaQuery maxDeviceWidth={500}>
  <DisplayFish />
  </MediaQuery>
  </div>
  <div className="tablet">
<MediaQuery minDeviceWidth={501} maxDeviceWidth={1026}>
<DisplayFish />
  </MediaQuery>
  </div>
  <div className="pc">
<MediaQuery minDeviceWidth={1027}>
  <DisplayFish />
  </MediaQuery>
  </div>
</header>
</div>)}
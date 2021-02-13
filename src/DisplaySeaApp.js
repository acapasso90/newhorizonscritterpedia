import './App.css';
import DisplaySeaCritters from "./DisplaySeaCritters.js";
import MediaQuery from 'react-responsive'
import React from 'react';


// Sets MediaQueries and DisplaysSeaCritters
export default function DisplaySeaApp() {
  return (
    <div className="App">
      <header className="header">
        <div className="mobile">
      <MediaQuery maxDeviceWidth={500}>
        <DisplaySeaCritters />
        </MediaQuery>
        </div>
        <div className="tablet">
      <MediaQuery minDeviceWidth={501} maxDeviceWidth={1025}>
        <DisplaySeaCritters />
        </MediaQuery>
        </div>
        <div className="pc">
      <MediaQuery minDeviceWidth={1026}>
        <DisplaySeaCritters />
        </MediaQuery>
        </div>
      </header>
    </div>
  );
}

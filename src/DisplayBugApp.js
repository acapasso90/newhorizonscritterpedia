import './App.css';
import DisplayBugs from "./DisplayBugs.js";
import MediaQuery from 'react-responsive'
import React from 'react';

// Sets MediaQueries and DisplaysBugs
export default function DisplayBugApp() {
  return (
    <div className="App">
      <header className="header">
        <div className="mobile">
      <MediaQuery maxDeviceWidth={500}>
        <DisplayBugs />
        </MediaQuery>
        </div>
        <div className="tablet">
      <MediaQuery minDeviceWidth={501} maxDeviceWidth={1025}>
        <DisplayBugs />
        </MediaQuery>
        </div>
        <div className="pc">
      <MediaQuery minDeviceWidth={1026}>
        <DisplayBugs />
        </MediaQuery>
        </div>
      </header>
    </div>
  );
}
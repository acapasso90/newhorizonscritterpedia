import './App.css';
import BugApp from "./BugApp.js";
import MediaQuery from 'react-responsive'
import React from 'react';



export default function DisplayBugApp() {
  return (
    <div className="App">
      <header className="header">
        <div className="mobile">
      <MediaQuery maxDeviceWidth={410}>
        <BugApp />
        </MediaQuery>
        </div>
        <div className="tablet">
      <MediaQuery minDeviceWidth={411} maxDeviceWidth={1025}>
        <BugApp />
        </MediaQuery>
        </div>
        <div className="pc">
      <MediaQuery minDeviceWidth={1026}>
        <BugApp />
        </MediaQuery>
        </div>
      </header>
    </div>
  );
}
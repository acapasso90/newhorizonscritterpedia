import './App.css';
import DeepSeaApp from "./DeepSeaApp.js";
import MediaQuery from 'react-responsive'
import React from 'react';



export default function DisplaySeaApp() {
  return (
    <div className="App">
      <header className="header">
        <div className="mobile">
      <MediaQuery maxDeviceWidth={410}>
        <DeepSeaApp />
        </MediaQuery>
        </div>
        <div className="tablet">
      <MediaQuery minDeviceWidth={411} maxDeviceWidth={1025}>
        <DeepSeaApp />
        </MediaQuery>
        </div>
        <div className="pc">
      <MediaQuery minDeviceWidth={1026}>
        <DeepSeaApp />
        </MediaQuery>
        </div>
      </header>
    </div>
  );
}

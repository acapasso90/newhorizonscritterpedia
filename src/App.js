import './App.css';
import FishApp from "./FishApp.js";
import MediaQuery from 'react-responsive'


function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="mobile">
      <MediaQuery maxDeviceWidth={410}>
        <FishApp />
        </MediaQuery>
        </div>
        <div className="tablet">
      <MediaQuery minDeviceWidth={411} maxDeviceWidth={1025}>
        <FishApp />
        </MediaQuery>
        </div>
        <div className="pc">
      <MediaQuery minDeviceWidth={1026}>
        <FishApp />
        </MediaQuery>
        </div>
      </header>
    </div>
  );
}

export default App;

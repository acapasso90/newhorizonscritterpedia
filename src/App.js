import './App.css';
import Header from "./Header.js";
import DisplayFish from "./DisplayFish.js";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
        <DisplayFish />
      </header>
    </div>
  );
}

export default App;

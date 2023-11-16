import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";
import Switch from "./components/Switch";
const App = () => {
  return (
    <div>
      <div className="main">
        <div className="gradient"/>
      </div>
      <div className="app">
        <Hero/>
        <Switch/>
      </div>
    </div>
  );
};

export default App;

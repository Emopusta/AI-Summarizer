import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";
const App = () => {
  return (
    <div>
      <div className="main">
        <div className="gradient"/>
      </div>
      <div className="app">
        <Hero/>
        <Demo/>
      </div>
    </div>
  );
};

export default App;

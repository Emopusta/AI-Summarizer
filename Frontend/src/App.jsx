import "./App.css";
import Switch from "./components/Switch";
import Header from "./components/Header";
const App = () => {
  return (
    <div>
      <div className="main">
        <div className="gradient"/>
      </div>
      <div className="app">
        <Header/>
        <Switch/>
      </div>
    </div>
  );
};

export default App;

import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
const App = () => {
  return (
    <div>
      <div className="main">
        <div className="gradient"/>
      </div>
      <div className="app">
        <Header/>
        <Outlet/>
      </div>
    </div>
  );
};

export default App;

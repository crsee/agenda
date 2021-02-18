import logo from './logo.svg';
import './App.css';
import React, {useContext} from "react";
import {Route} from "react-router-dom";
import Landing from "./components/Landing"
import CreateEvent from "./components/CreateEvent/CreateEvent"


function App() {
  return (
    <div className="app">
      <Route exact path = "/" component={Landing}/>
      <Route exact path = "/createEvent" component = {CreateEvent}/>
    </div>
  );
}

export default App;

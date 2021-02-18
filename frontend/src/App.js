import logo from './logo.svg';
import './App.css';
import React, {useContext} from "react";
import {Route} from "react-router-dom";
import Landing from "./components/Landing"
import CreateEvent from "./components/CreateEvent/CreateEvent"
import EventList from "./components/EventList/EventList"
import SingleEvent from "./components/Event/SingleEventPage"


function App() {
  return (
    <div className="app">
      <Route exact path = "/" component={Landing}/>
      <Route exact path = "/createEvent" component = {CreateEvent}/>
      <Route exact path = "/eventList" component = {EventList}/>
      <Route exact path = "/SingleEvent/:id" component={SingleEvent}/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, {useContext} from "react";
import {Route} from "react-router-dom";
import Landing from "./components/Landing"
import CreateEvent from "./components/CreateEvent/CreateEvent"
import EventList from "./components/EventList/EventList"
import SingleEvent from "./components/Event/SingleEventPage"
import Profile from "./components/Profile/ProfilePage"
import Navbar from "./components/Navbar/Navbar"
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <div className="app">
        <Navbar/>
      <Route exact path = "/" component={Landing}/>
      <Route exact path = "/createEvent" component = {CreateEvent}/>
      <Route exact path = "/eventList" component = {EventList}/>
      <Route exact path = "/singleEvent/:id" component={SingleEvent}/>
      <Route exact path = "/profile" component={Profile}/>
      <Route exact path = "/calendar" component={Calendar}/>
    </div>
  );
}

export default App;

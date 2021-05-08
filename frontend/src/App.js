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
import PublicRoute from "./components/Routes/PublicRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";

function App() {
  return (
    <div className="app">
        <Navbar/>
      <Route exact path = "/" component={Landing}/>
      <PrivateRoute exact path = "/createEvent" component = {CreateEvent}/>
      <PrivateRoute exact path = "/eventList" component = {EventList}/>
      <PrivateRoute exact path = "/singleEvent/:id" component={SingleEvent}/>
      <PrivateRoute exact path = "/profile" component={Profile}/>
      <PrivateRoute exact path = "/calendar" component={Calendar}/>
    </div>
  );
}

export default App;

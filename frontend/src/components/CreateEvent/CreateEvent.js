import React, {useEffect, useState} from "react";
import axios from "axios";

import Calendar from '../Calendar/Calendar'
import './EventForm.css';
//import './EventFormBulma.sass';

import EventForm from "./EventForm";
import {useAuth0} from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;



function EventCalendar(){
    const {user, isAuthenticated} = useAuth0();
    const [data, setData] = useState({
        dataBaseEvents:[]
    });

    useEffect(()=> {
        console.log('okay');
        fetch('/getAllEvents')
            .then(response => response.json())
            .then(data => {
                console.log("Get response: ", data);
                const dataBaseEvents = data
                setData({dataBaseEvents : dataBaseEvents});
                console.log("Calendar data has been populated")
                console.log("events",dataBaseEvents);
                console.log("hi",domain, clientId);
                console.log("THIS IS THE EMAIL", user.email);
            })
            .catch(error => console.error(error));

    }, []);


    return(
        <div className="columns2">
            <div className="column1">
                <EventForm></EventForm>
            </div>
            <div className="column2">
                <Calendar calendarProp={data.dataBaseEvents}></Calendar>
            </div>
        </div>
    );
}

export default EventCalendar;
import axios from "axios";
import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";

function handleSubmit(e){

    e.preventDefault();
    var name  = e.target[0].value;
    var description= e.target[1].value;
    var start_date_time= e.target[2].value;
    var end_date_time= e.target[3].value;
    var host = e.target[4].value;

    var event = {
        name: name,
        description: description,
        start_date_time: start_date_time,
        end_date_time: end_date_time,
        host:host
    }
    console.log("event", event)

    axios({
        url: '/saveEvent',
        method: 'POST',
        data: event
    })
        .then(() =>{
            console.log("data has been sent to the server");
        })
        .catch((error) =>{
            console.log(error);
            console.log("Server Error");
        });
    window.location.reload(false)
}

function EventForm(){

    const {user,isAuthenticated} = useAuth0();
    console.log("EMAIL",user);
    if(user === undefined){
        return(
            <div>
                loading
            </div>
        )
    }
    return (
        <form onSubmit={handleSubmit} className="event_form">
            <h1 className="eventFormh1">Event Info</h1>
            <label className = "label" htmlFor='event_name'>Name of Event:*</label>
            <div className="control">
                <input type="text"
                       name="name"
                       className="input"
                       placeholder="Event Name"
                       required
                />
            </div>
            <br></br>
            <label className = "label"  htmlFor='event_description'>Description of event:</label>
            <div className="control">
                        <textarea type="text"
                                  name="description"
                                  className="textarea"
                                  placeholder="Event Description">
                        </textarea>
            </div>
            <br></br>
            <label className = "label"  htmlFor='event_start_date'>Start date:*</label>
            <div className="control">
                <input type="datetime-local"
                       className="input"
                       name="start_date"
                       required
                />
            </div>
            <br></br>
            <label className = "label"  htmlFor='event_end_date'>End date:*</label>
            <div className="control">
                <input type="datetime-local"
                       className="input"
                       name="end_date"
                       required
                />
            </div>
            <br></br>
            <div className="control">
                <input type="hidden"
                       name="name"
                       className="input"
                       value = {user.email}
                       required
                />
            </div>
            <input type="submit" value="Submit" className="flexInput"/>
        </form>

    )



}

export default EventForm;
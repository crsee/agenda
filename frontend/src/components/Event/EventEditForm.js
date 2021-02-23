import axios from "axios";
import React, {useEffect, useState} from "react";
import EventServices from "../../services/EventServices";
import {changeUTCLOCAL} from "./EventDateHelper"

function handleSubmit(eventID){
    return e => {
        e.preventDefault();
        console.log("is this the ID",eventID);
        console.log("good lord",e.target[0].value);

        var name  = e.target[0].value;
        var description= e.target[1].value;
        var start_date_time= e.target[2].value;
        var end_date_time= e.target[3].value;


        var event = {

            name: name,
            description: description,
            start_date_time: start_date_time,
            end_date_time: end_date_time,
            eventID:eventID
        }
        console.log("event", event)

        EventServices.editEvent(event)
            .then(({ message }) => {
                console.log(message.msgBody);
                window.location.reload(false);
            });
    }
}

function convertDateTime(props){
    const start = props.props.start_date_time.substring(0,16);
    props.props.start_date_time=start;
    const end = props.props.end_date_time.substring(0,16);
    props.props.end_date_time=end;
}

function EventEditForm(props){
    console.log(props);
    console.log(props.props.eventID)
    //convertDateTime(props)
    return(
        <form onSubmit={handleSubmit(props.props.eventID)}>

            <h1 className="eventFormh1">Event Info</h1>
            <label className = "label" htmlFor='event_name'>Name of Event:*</label>
            <div className="control">
                <input type="text"
                       name="name"
                       className="input"
                       placeholder="Event Name"
                    //onChange={handleChange}
                       defaultValue={props.props.name}
                       required
                />
            </div>
            <br></br>
            <label className = "label"  htmlFor='event_description'>Description of event:</label>
            <div className="control">
                        <textarea type="text"
                                  name="description"
                                  className="textarea"
                            //onChange={handleChange}
                                  defaultValue={props.props.description}>
                        </textarea>
            </div>
            <br></br>
            <label className = "label"  htmlFor='event_start_date'>Start date:*</label>
            <div className="control">
                <input type="datetime-local"
                       className="input"
                       name="start_date"
                    //onChange={handleChange}
                       defaultValue={changeUTCLOCAL(props.props.start_date_time)}
                       required
                />
            </div>
            <br></br>
            <label className = "label"  htmlFor='event_end_date'>End date:*</label>
            <div className="control">
                <input type="datetime-local"
                       className="input"
                       name="end_date"
                    //onChange={handleChange}
                       defaultValue={changeUTCLOCAL(props.props.end_date_time)}
                       required
                />
            </div>

            <input type="submit" value="Submit" className="flexInput"/>
        </form>

    )



}

export default EventEditForm;
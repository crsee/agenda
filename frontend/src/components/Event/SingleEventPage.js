import React, {useEffect, useState, useContext } from "react";
// import "./Event.css"
//import CommentBox from "../comments-system/client/src/components/Box"
//import { AuthContext } from '../../Context/AuthContext';
import axios from "axios";
import EventEditForm from './EventEditForm'
import EventServices from '../../services/EventServices';
import "./SingleEventPage.css";

function SingleEvent(props){

    //const {user} = useContext(AuthContext);
    const [data, setData] = useState({
        dataBaseEvents: [],
        //dataBaseEventsFormatted:[],
        eventID:'',
        name: '',
        description: '',
        start_date_time: '',
        end_date_time: '',
        host:'',
        editState: false
    });


    useEffect(()=> {
        const eventID = props.match.params.id;
        EventServices.getSingleEvent(eventID)
            .then(({ message, eventData}) =>{
                if(message.msgError)
                    console.log(message.msgBody);
                else {
                    setData({
                        eventID: eventID,
                        name: eventData.name,
                        description: eventData.description,
                        start_date_time: eventData.start_date_time,
                        end_date_time: eventData.end_date_time,
                        host: eventData.host
                    });
                }
                // console.log('this the data',res.data);
                // console.log("data has been fetched");
            })
    }, [props.match.params.id]);


    function convertTime(date){
        var time = new Date(date);
        console.log(time.toString())
        var string = time.toLocaleDateString()+' '+time.toLocaleTimeString()
        return string;
    }

    function toggleEditOn(){
        console.log('toggle on ',data);
        setData({editState: true,
            eventID: data.eventID,
            name:data.name,
            description: data.description,

            start_date_time: data.start_date_time,
            end_date_time: data.end_date_time,
        })
    }

    function toggleEditOff(){
        console.log('toggle off',data);
        setData({editState: false,
            eventID: data.eventID,
            name:data.name,
            description: data.description,
            start_date_time: data.start_date_time,
            end_date_time: data.end_date_time,
        })
    }

    function deleteEvent(){
        console.log(data.eventID);
        var eventID = {
            id: data.eventID
        }
        EventServices.deleteEvent(eventID)
            .then(({ message }) => {
                if(message.msgError)
                    console.log(message.msgBody);
                else {
                    console.log(message.msgBody);
                    //window.location.reload(true);
                }
                window.location.replace("/eventList")
            })
    }
    //2 different ways
    // call with <button onClick={()=>logDelete(data.eventID))}>DELETE</button>
    // const logDelete = e =>{
    //     console.log("hi",e);
    //     var eventID = {
    //         id: e
    //     }
    //     console.log("bye",eventID)
    //     EventServices.deleteEvent(eventID)
    //         .then(({ message }) => {
    //             if(message.msgError)
    //                 console.log(message.msgBody);
    //             else {
    //                 console.log(message.msgBody);
    //                 //window.location.reload(true);
    //             }
    //             //window.location.replace('/eventList')
    //         });
    //}


    if(data.editState === true){
        return(
            <div>
                <div>
                    <EventEditForm props={data}></EventEditForm>
                    <button onClick={toggleEditOff}>Cancel</button>
                    {/*<CommentBox eventID={props.match.params.id} user={user}/>*/}
                </div>
            </div>
        )
    }

    return(
        <div className = "SingleEvent">
            <h1 className="title is-1">Single Event Comp for: {data.name}</h1>
            <button onClick={toggleEditOn}>EDIT</button>
            <button onClick={deleteEvent}>DELETE</button>
            <br/><h2>Event Info</h2>
            <p>
                <strong>Host</strong>: {data.host} <br/>
                <strong>Name</strong>: {data.name} <br/>
                <strong>Event Description</strong>: {data.description} <br/>
                <strong>Start Time</strong>: {convertTime(data.start_date_time)} <br/>
                <strong>End Time</strong>: {convertTime(data.end_date_time)}<br/>
            </p>
            {/*<CommentBox eventID={props.match.params.id} user={user}/>*/}
        </div>
    )
}


export default SingleEvent;
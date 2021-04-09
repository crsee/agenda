import axios from "axios";
import React, {useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, {EventLeaveArg} from "@fullcalendar/interaction";
import {useHistory} from "react-router-dom";



function formatEventData(eventList){

    // const list = [];
    // console.log("hi",eventList);
    // if(eventList != undefined){
    //     eventList.forEach(function(entry){
    //         console.log("entry",entry);
    //         list.push({title: entry.name, "start":entry.start_date_time, "end":entry.end_date_time})
    //     });
    // }
    // //data.dataBaseEventsFormatted = list
    // console.log("formatted",list);
    // return list;

    const list = [];
    console.log("hi",eventList);
    if(eventList != undefined) {
        eventList.forEach(function (entry) {
            console.log("entry", entry);
            list.push({title: entry.name, "start": entry.start_date_time, "end": entry.end_date_time, "event_id":entry._id})
        });
    }
    //data.dataBaseEventsFormatted = list
    console.log("formatted",list);
    return list;

}



function Calendar(){

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
            })
            .catch(error => console.error(error));

    }, []);


    const history = useHistory();
    console.log("the props",data.dataBaseEvents);
    var formatted_data = formatEventData(data.dataBaseEvents.eventsData);

    return(
        <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                      headerToolbar={{
                          left: 'prev,next today',
                          center: 'title',
                          right: 'dayGridMonth,timeGridWeek,timeGridDay'
                      }}
                      contentHeight='auto'
                      initialView='dayGridMonth'
                      editable={true}
                      selectable={true}
                      selectMirror={true}
                      dayMaxEvents={true}
            //eventColor='#378006'
                      timeZone="local"
                      eventTextColor='#fff'
                      events={formatted_data}
                      eventClick={
                          function(arg){
                              console.log(arg.event._def.extendedProps.event_id)
                              history.push(`/SingleEvent/${arg.event._def.extendedProps.event_id}`)
                          }
                      }
            //weekends={this.state.weekendsVisible}
            //initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            //select={this.handleDateSelect}
            //eventContent={renderEventContent} // custom render function
            //eventClick={this.handleEventClick}
            //eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
        />
    )

}


export default Calendar;
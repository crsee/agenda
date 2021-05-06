import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import SingleEventForList from "./SingleEventForList";
import SearchBar from "../SearchBar/SearchBar";
import EventServices from '../../services/EventServices';
import {useAuth0} from "@auth0/auth0-react";
//import Footer from '../Footer'

function ListAllEvents(){
    const {user,isAuthenticated} = useAuth0();
    const [data, setData] = useState({
        dataBaseEvents:[],
        //dataBaseEventsFormatted:[],
        name:'',
        description:'',
        start_date:'',
        start_time:'',
        end_date:'',
        end_time:'',
        host:''
    });


    useEffect(()=> {
        if(isAuthenticated){
            console.log("user email",user.email);
            // EventServices.getEventByUser(user.email)
            //     .then(({ message, eventsData }) => {
            //         if(message.msgError)
            //             console.log(message.msgBody);
            //         else {
            //             const dataBaseEvents = eventsData;
            //             setData({dataBaseEvents : dataBaseEvents});
            //         }
            //     });
            fetch('/getEventByUser/'+user.email)
                .then(response => response.json())
                .then(data => {
                    console.log("Get response: ", data);
                    const dataBaseEvents = data
                    setData({dataBaseEvents : dataBaseEvents});
                    console.log("events for this host",dataBaseEvents);
                })
                .catch(error => console.error(error));
        }
    }, [isAuthenticated]);

    function sortHelper(event){
        if(event.target.value === "NameA"){
            var newData = data.dataBaseEvents.sort(sortByNameA);
            setData({dataBaseEvents: newData});
            console.log(newData);
        }
        if(event.target.value === "DateS"){
            var newData = data.dataBaseEvents.sort(sortByDateS);
            setData({dataBaseEvents: newData});
            console.log(newData);
        }
        if(event.target.value === "NameZ"){
            var newData = data.dataBaseEvents.sort(sortByNameZ);
            setData({dataBaseEvents: newData});
            console.log(data.dataBaseEvents);
        }
        if(event.target.value === "DateL"){
            var newData = data.dataBaseEvents.sort(sortByDateL);
            setData({dataBaseEvents: newData});
            console.log(data.dataBaseEvents);
        }
    }

    function sortByNameA(a,b){
        if(a.name.toLowerCase() < b.name.toLowerCase()){
            return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()){
            return 1;
        }
        return 0;
    }

    function sortByDateS(a,b){
        if(a.start_date_time < b.start_date_time){
            return -1;
        }
        if (a.start_date_time > b.start_date_time){
            return 1;
        }
        return 0;
    }

    function sortByNameZ(a,b){
        if(a.name.toLowerCase() < b.name.toLowerCase()){
            return 1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()){
            return -1;
        }
        return 0;
    }

    function sortByDateL(a,b){
        if(a.start_date_time < b.start_date_time){
            return 1;
        }
        if (a.start_date_time > b.start_date_time){
            return -1;
        }
        return 0;
    }


    console.log("EMAIL",user);
    if(data.dataBaseEvents.eventsData === undefined){
        return(
            <div>
                loading...
            </div>
        )
    }
    else if(
        data.dataBaseEvents.eventsData.length > 0){
        return(
            <div className="first">
                <div className="second">
                    <div className= "searchBar">
                        <SearchBar/>
                    </div>

                    <p>Sort By:
                        <select onChange={sortHelper}>
                            <option value="Default"></option>
                            <option value="NameA">Name (A-Z)</option>
                            <option value="NameZ">Name (Z-A)</option>
                            <option value="DateS">Date (Soon-Later)</option>
                            <option value="DateL">Date (Later-Soon)</option>
                        </select>
                    </p>
                </div>


                <div className="second">
                    <SingleEventForList eventsProp={data.dataBaseEvents.eventsData}/>
                </div>
            </div>



        )}
    else{
        return(
            <p>no events to list</p>
        )
    }






}

export default ListAllEvents;
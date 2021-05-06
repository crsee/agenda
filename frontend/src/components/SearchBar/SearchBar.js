import React from 'react'
import {useAuth0} from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";



function SearchBar () {
    const history = useHistory();

    function handleSubmit(e){
        //var name = document.getElementById("event_search").value;
        history.push('/eventList')
        window.location.reload();
    }

    return(
        <form onSubmit={handleSubmit} className="s_form">
        <input
            type="text"
            id="event_search"
            placeholder="Search Events"
            name="search_input"
        />
        <input type="submit" value="Submit" className="flexInput"/>
        </form>
        )
}

export default SearchBar
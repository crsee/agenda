import React from 'react'
import {useAuth0} from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import {Link} from "react-router-dom";
import LogoutButton from "../Login/LogoutButton";
import LoginButton from "../Login/LoginButton";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

const Navbar = () =>{
    const {user, isAuthenticated} = useAuth0();
    if(isAuthenticated){
        return(
            <nav className="navMain">
                <div className="leftNav">
                    <Link to="/">Home</Link>
                </div>

                <div className="rightNav">
                    <span className="navItem">
                        <Link to="/profile"> Profile </Link>
                    </span>

                    <span className="navItem">
                        <Link to="/createEvent">Create Event</Link>
                    </span>

                    <span className="navItem">
                        <Link to="/eventList">Event List</Link>
                    </span>

                    <span className="navItem">
                        <Link to="/calendar">Calendar</Link>
                    </span>

                    <span className="navItem">
                        <LoginButton />
                        <LogoutButton/>
                    </span>

                </div>
            </nav>
        )
    }
    else{
        return(
            <nav className="navMain">
                <div className="navItem">
                    <Link to="/">Home</Link>
                </div>
                <div className="navItem">
                    <LoginButton />
                    <LogoutButton/>
                </div>
            </nav>
        )
    }


}
export default Navbar
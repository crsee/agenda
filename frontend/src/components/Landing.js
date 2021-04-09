import React from "react";
import {Link} from "react-router-dom";
import LoginButton from "./Login/LoginButton";
import LogoutButton from "./Login/LogoutButton";
import Profile from "./Profile/ProfilePage";

//footer here;

const Landing = () => {


    return (
        <div className="App">
            <header className="App-header">
                <p>
                    WELCOME TO MY APP
                </p>
                <p>
                    {/*<LoginButton />*/}
                    {/*<LogoutButton/>*/}
                    {/*<Profile/>*/}
                    {/*<Link to="/profile"> Profile </Link>*/}
                    <Link to ="/createEvent"> Create New Event </Link>
                    <br></br>
                    <Link to ="/eventList"> Show all events </Link>
                </p>
            </header>

        </div>
    );
}

export default Landing;
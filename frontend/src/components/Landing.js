import React from "react";
import {Link} from "react-router-dom";

//footer here;

const Landing = () => {

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    WELCOME TO MY APP
                </p>
                <p>
                    <Link to ="/createEvent"> Create New Event </Link>
                    <br></br>
                    <Link to ="/eventList"> Show all events </Link>
                </p>
            </header>

        </div>
    );
}

export default Landing;
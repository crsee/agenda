import React from "react";
import {Link} from "react-router-dom";
import LoginButton from "./Login/LoginButton";
import LogoutButton from "./Login/LogoutButton";
import Profile from "./Profile/ProfilePage";
import {useAuth0} from "@auth0/auth0-react";

//footer here;

const Landing = () => {
    const {user,isAuthenticated} = useAuth0();
    console.log(localStorage.getItem("isUserAuthenticated"));
    console.log(localStorage.getItem("userEmail"));
    if(isAuthenticated){
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
                        <Link to="/profile"> Profile </Link>
                        <br></br>
                        <Link to ="/createEvent"> Create New Event </Link>
                        <br></br>
                        <Link to ="/eventList"> Show all events </Link>
                    </p>
                </header>
            </div>
        );
    }
    else{
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        WELCOME TO MY APP
                    </p>
                    <p>
                        Please Log In
                        {/*<LoginButton />*/}
                        {/*<LogoutButton/>*/}
                        {/*<Profile/>*/}
                        {/*<Link to="/profile"> Profile </Link>*/}
                        {/*<Link to ="/createEvent"> Create New Event </Link>*/}
                        {/*<br></br>*/}
                        {/*<Link to ="/eventList"> Show all events </Link>*/}
                    </p>
                </header>
            </div>
        );
    }
}

export default Landing;
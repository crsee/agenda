import React from 'react';
import {useAuth0} from "@auth0/auth0-react";

const LogoutButton = () => {
    const {logout, isAuthenticated} = useAuth0();

    function onLogout(){
        localStorage.setItem("isUserAuthenticated", "no")
        logout();
    }
    return(
        isAuthenticated && (
            <button onClick={onLogout}>
                Log Out
            </button>
        )
    )
}

export default LogoutButton;
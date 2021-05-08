import React from 'react';
import {useAuth0} from "@auth0/auth0-react";

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();

    function onLogin(){
        localStorage.setItem("isUserAuthenticated", "yes");
        loginWithRedirect().then(r => console.log(r));
    }

    return(
        !isAuthenticated && (
            <button onClick={onLogin}>
                Log In
            </button>
        )
    )
}

export default LoginButton;
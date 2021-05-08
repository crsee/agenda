import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useAuth0} from "@auth0/auth0-react";

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const {user,isAuthenticated} = useAuth0();

    return (
        <Route {...rest} render={props => (
            localStorage.getItem("isUserAuthenticated") === "yes" && restricted ?
                <Redirect to="/home" />
                : <Component {...props} />
        )}/>
    );
}

export default PublicRoute;
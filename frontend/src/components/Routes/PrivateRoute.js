import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useAuth0} from "@auth0/auth0-react";


/*
    Credit to https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e
    for public, private, restricted routing components
*/
const PrivateRoute = ({component: Component, ...rest}) => {
    const {user,isAuthenticated} = useAuth0();

    return (
        <Route {...rest} render={props => (
            localStorage.getItem("isUserAuthenticated") === "yes" ?
                <Component {...props} />
                :   <Redirect to={{
                    pathname: "/",
                    login: true,
                }}/>
        )}/>
    );
}

export default PrivateRoute;
export default {
    getAllEvents : () => {
        return fetch('http://localhost:5000/getAllEvents', {
            credentials : 'include'
        })
            .then(res => {
                if(res.status !== 401) {
                    if (res.status === 500)
                        return res.json().then(({ message }) => {
                            return { message, data : null};
                        });
                    else
                        return res.json().then(({ message, eventsData }) => {
                            return { message, eventsData};
                        });
                }
                else
                    return { message : { msgBody : "Not Authenticated", msgError : true}, data : null};
            });
    },
    saveEvent : eventData => {
        return fetch('http://localhost:5000/saveEvent', {
            credentials : 'include',
            method : 'post',
            body : JSON.stringify(eventData),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
            .then(res => {
                if(res.status !== 401)
                    return res.json().then(({ message }) => {
                        return { message };
                    });
                else
                    return { message : { msgBody : "Not Authenticated", msgError : true}};
            });
    },
    getSingleEvent : eventID => {
        return fetch('http://localhost:5000/getSingleEvent/' + eventID, {
            credentials : 'include',
        })
            .then(res => {
                if(res.status !== 401) {
                    if (res.status === 500)
                        return res.json().then(({ message }) => {
                            return { message, data : null};
                        });
                    else
                        return res.json().then(({ message, eventData }) => {
                            return { message, eventData};
                        });
                }
                else
                    return { message : { msgBody : "Not Authenticated", msgError : true}, data : null};
            });
    },
    deleteEvent : eventID => {
        return fetch('http://localhost:5000/deleteEvent', {
            credentials : 'include',
            method : 'DELETE',
            body : JSON.stringify(eventID),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
            .then(res => {
                if(res.status !== 401)
                    return res.json().then(({ message }) => {
                        return { message };
                    });
                else
                    return { message : { msgBody : "Not Authenticated", msgError : true}};
            });
    },
    editEvent : eventData => {
        return fetch('http://localhost:5000/editEvent', {
            credentials : 'include',
            method : 'put',
            body : JSON.stringify(eventData),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
            .then(res => {
                if(res.status !== 401)
                    return res.json().then(({ message }) => {
                        return { message };
                    });
                else
                    return { message : { msgBody : "Not Authenticated", msgError : true}};
            });
    },

    getEventByUser : userID => {
        return fetch('http://localhost:5000/getEventByUser/' + userID, {
            credentials : 'include',
        })
            .then(res => {
                if(res.status !== 401) {
                    if (res.status === 500)
                        return res.json().then(({ message }) => {
                            return { message, data : null};
                        });
                    else
                        return res.json().then(({ message, eventData }) => {
                            return { message, eventData};
                        });
                }
                else
                    return { message : { msgBody : "Not Authenticated", msgError : true}, data : null};
            });
    }
}
const Event = require('../model/Event');

module.exports.getSingleEvent = (req, res) => {
    Event.findById(req.params.id, (err, eventData) => {
        if(err)
            res.status(500).json({ message : {
                    msgBody : "Error has occurred", msgError : true },
                eventData : null
            });
        else
            res.status(200).json({ message : {
                    msgBody : "Successfully retrieved event", msgError : false },
                eventData
            });
    });
}


module.exports.saveEvent = (req, res) => {
    const eventData = req.body;
    const newEvent = new Event(eventData);

    newEvent.save((err, data) => {
        if(err)
            res.status(500).json({ message : {
                    msgBody : "Error has occurred", msgError : true}
            });
        else
            res.status(200).json({ message : {
                    msgBody : "Event successfully saved", msgError : false }
            });
    })
}

module.exports.deleteEvent = (req, res) => {
    Event.deleteOne({ _id : req.body.id }, (err, response) => {
        if(err)
            res.status(500).json({ message : {
                    msgBody : "Error has occurred", msgError : true }
            });
        else
            res.status(200).json({ message : {
                    msgBody : "Event successfully deleted", msgError : false }
            });
    })
}

module.exports.searchEvent = (req, res) => {
    Event.search({ query_string: { query: req.params.name }}, (err, response) => {
        if(err)
            res.status(500).json({ message : {
                    msgBody : "Error has occurred", msgError : true },
                eventsData : null
            });
        else
            var data = response.hits.hits;
        res.status(200).json({ message : {
                msgBody : "Successfully retrieved event", msgError : false },
            data
        });
    });
}

module.exports.getAllEvents = (req, res) => {
    Event.find({}, (err, eventsData) => {
        if(err)
            res.status(500).json({ message : {
                    msgBody : "Error has occurred", msgError : true },
                eventsData : null
            });
        else
            console.log("hi",eventsData);
            res.status(200).json({ message : {
                    msgBody : "Successfully retrieved event", msgError : false },
                eventsData
            });
    });
}

module.exports.editEvent = (req, res) => {
    Event.updateOne({_id: req.body.eventID},
        {
            $set: {
                name: req.body.name,
                description: req.body.description,
                start_date_time: req.body.start_date_time,
                end_date_time: req.body.end_date_time
            }
        }, (err, response) => {
            if (err)
                res.status(500).json({
                    message: {
                        msgBody: "Error has occurred", msgError: true
                    }
                });
            else
                res.status(200).json({
                    message: {
                        msgBody: "Event successfully updated", msgError: false
                    }
                });
        })
}
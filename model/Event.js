const mongoose = require('mongoose')
// const mongoosastic = require('mongoosastic')
//schema
const Schema = mongoose.Schema;
const EventSchema = new Schema({
    //name: {type: String, es_indexed: true},
    name: String,
    description: String,
    start_date_time: Date,
    end_date_time: Date
});
//
// EventSchema.plugin(mongoosastic, {
//     hosts: [
//         'localhost:9200'
//     ]
// });

//Model
const Event = mongoose.model("event", EventSchema);

module.exports = Event;
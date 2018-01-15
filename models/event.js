const mongoose = require("mongoose");

mongoose.connect('mongodb://student:abc123@ds255787.mlab.com:55787/heroku_d869qk08', { useMongoClient: true });

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: String,
    location: String,
    dateStart: String,
    dateEnd:String,
    timeStart: String,
    timeEnd:String,
    description: String,
    price: String,
    contact: String,
    eventPict: String,
    eventType:String,
    eventTopic:String
});

const Eventdb = mongoose.model("event-arga", eventSchema);

module.exports = Eventdb
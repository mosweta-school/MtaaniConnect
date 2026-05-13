// Defines how your data looks.
// Event.js → event schema (title, location, date, userId)
const eventSchema = {
    id: Number,
    title: String,
    location:String,
    date: String,
    userId: String,
    timeOfEvent: String,
    organizer: String,
    Category: String,
    Attendees: Array,
}

export default eventSchema; 


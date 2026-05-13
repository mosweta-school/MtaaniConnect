// Handles what happens when requests come in.
//Create, update, delete events logicgoes here.

export const createEvent = (req, res) => {
  res.json({ message: "Create event" });
};

export const getEvents = (req, res) => {
  res.json({ message: "Get all events" });
};

export const updateEvent = (req, res) => {
  res.json({ message: "Update event" });
};

export const deleteEvent = (req, res) => {
  res.json({ message: "Delete event" });
};

export const getMyEvents = (req, res) => {
  res.json({ message: "Get my events" });
};
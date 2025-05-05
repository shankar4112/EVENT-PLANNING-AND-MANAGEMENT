const Event = require('../models/Event');

const eventService = {
  async createEvent(data) {
    const event = new Event(data);
    return await event.save();
  },

  async getAllEvents() {
    return await Event.find();
  },

  async getEventById(id) {
    return await Event.findOne({ eventid: id });
  },

  async updateEvent(id, data) {
    return await Event.findOneAndUpdate({ eventid: id }, data, { new: true });
  },

  async deleteEvent(id) {
    return await Event.findOneAndDelete({ eventid: id });
  }
};

module.exports = eventService;

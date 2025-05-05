const Attendee = require('../models/Attendee');

const attendeeService = {
  // Create a new attendee
  async createAttendee(data) {
    const attendee = new Attendee(data);
    return await attendee.save();
  },

  // Get all attendees
  async getAllAttendees() {
    return await Attendee.find();
  },

  // Get attendee by ID
  async getAttendeeById(id) {
    return await Attendee.findOne({ attendeeid: id });
  },

  // Update attendee by ID
  async updateAttendee(id, data) {
    return await Attendee.findOneAndUpdate({ attendeeid: id }, data, { new: true });
  },

  // Delete attendee by ID
  async deleteAttendee(id) {
    return await Attendee.findOneAndDelete({ attendeeid: id });
  }
};

module.exports = attendeeService;

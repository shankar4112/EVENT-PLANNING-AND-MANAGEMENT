const User = require('../models/User'); // Organizer is a type of User

const organizerService = {
  async createOrganizer(data) {
    const organizer = new User(data);
    return await organizer.save();
  },

  async getAllOrganizers() {
    return await User.find({ role: 'organizer' });
  },

  async getOrganizerById(id) {
    return await User.findOne({ userid: id, role: 'organizer' });
  },

  async updateOrganizer(id, data) {
    return await User.findOneAndUpdate({ userid: id, role: 'organizer' }, data, { new: true });
  },

  async deleteOrganizer(id) {
    return await User.findOneAndDelete({ userid: id, role: 'organizer' });
  }
};

module.exports = organizerService;

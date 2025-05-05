const Venue = require('../models/Venue');

const venueService = {
  async createVenue(data) {
    const venue = new Venue(data);
    return await venue.save();
  },

  async getAllVenues() {
    return await Venue.find();
  },

  async getVenueById(id) {
    return await Venue.findOne({ venueid: id });
  },

  async updateVenue(id, data) {
    return await Venue.findOneAndUpdate({ venueid: id }, data, { new: true });
  },

  async deleteVenue(id) {
    return await Venue.findOneAndDelete({ venueid: id });
  }
};

module.exports = venueService;

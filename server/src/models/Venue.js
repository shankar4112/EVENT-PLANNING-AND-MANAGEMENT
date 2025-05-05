const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  venueid: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true }
}, { versionKey: false });

module.exports = mongoose.model('Venue', venueSchema);

const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  attendeeid: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true }
}, { versionKey: false });

module.exports = mongoose.model('Attendee', attendeeSchema);

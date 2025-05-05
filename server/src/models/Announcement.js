const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  announcementid: { type: Number, required: true, unique: true },
  eventid: { type: Number, required: true, ref: 'Event' },
  message: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = mongoose.model('Announcement', announcementSchema);
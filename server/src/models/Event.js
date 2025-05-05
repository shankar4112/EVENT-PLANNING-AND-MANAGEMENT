const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventid: { type: Number, required: true, unique: true },
  organizerid: { type: Number, required: true, ref: 'User' },
  title: { type: String, required: true },
  description: String,
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  location: String,
  mode: {
    type: String,
    enum: ['online', 'offline'],
    default: 'offline'
  },
  fee: { type: Number, default: 0 },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
    default: 'upcoming'
  }
}, { versionKey: false });

module.exports = mongoose.model('Event', eventSchema);
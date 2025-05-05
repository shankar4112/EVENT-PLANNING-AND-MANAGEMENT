const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  registrationid: { type: Number, required: true, unique: true },
  eventid: { type: Number, required: true, ref: 'Event' },
  userid: { type: Number, required: true, ref: 'User' },
  registered_on: { type: Date, default: Date.now },
  teamname: String,
  reg_status: {
    type: String,
    enum: ['confirmed', 'cancelled'],
    default: 'confirmed'
  }
}, { versionKey: false });

module.exports = mongoose.model('Registration', registrationSchema);
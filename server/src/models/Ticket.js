const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  ticketid: { type: Number, required: true, unique: true },
  eventid: { type: Number, required: true, ref: 'Event' },
  attendeeid: { type: Number, required: true, ref: 'Attendee' },
  price: { type: Number, required: true },
  ticket_type: {
    type: String,
    enum: ['regular', 'vip', 'student'],
    default: 'regular'
  }
}, { versionKey: false });

module.exports = mongoose.model('Ticket', ticketSchema);

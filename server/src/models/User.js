const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userid: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  role: {
    type: String,
    enum: ['organizer', 'attendee', 'admin'],
    default: 'organizer'
  }
}, { versionKey: false });

module.exports = mongoose.model('User', userSchema);

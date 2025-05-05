const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  paymentid: { type: Number, required: true, unique: true },
  registrationid: { type: Number, required: true, ref: 'Registration' },
  payment_date: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  method: {
    type: String,
    enum: ['card', 'upi', 'paypal'],
    default: 'upi'
  },
  payment_status: {
    type: String,
    enum: ['paid', 'pending', 'failed'],
    default: 'pending'
  }
}, { versionKey: false });

module.exports = mongoose.model('Payment', paymentSchema);
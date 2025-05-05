const Payment = require('../models/Payment');

const paymentService = {
  async createPayment(data) {
    const payment = new Payment(data);
    return await payment.save();
  },

  async getAllPayments() {
    return await Payment.find();
  },

  async getPaymentById(id) {
    return await Payment.findOne({ paymentid: id });
  },

  async updatePayment(id, data) {
    return await Payment.findOneAndUpdate({ paymentid: id }, data, { new: true });
  },

  async deletePayment(id) {
    return await Payment.findOneAndDelete({ paymentid: id });
  }
};

module.exports = paymentService;

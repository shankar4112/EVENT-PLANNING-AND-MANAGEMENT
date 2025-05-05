const Ticket = require('../models/Ticket');

const ticketService = {
  async createTicket(data) {
    const ticket = new Ticket(data);
    return await ticket.save();
  },

  async getAllTickets() {
    return await Ticket.find();
  },

  async getTicketById(id) {
    return await Ticket.findOne({ ticketid: id });
  },

  async updateTicket(id, data) {
    return await Ticket.findOneAndUpdate({ ticketid: id }, data, { new: true });
  },

  async deleteTicket(id) {
    return await Ticket.findOneAndDelete({ ticketid: id });
  }
};

module.exports = ticketService;

const express  = require('express');

const app = express();
const morgan = require('morgan');
const attendeeRouter = require('./routes/attendee_route');
const eventRouter = require('./routes/event_route');
const organizerRouter = require('./routes/organizer_route');
const paymentRouter = require('./routes/payment_route');
const ticketRouter = require('./routes/ticket_route');
const venueRouter = require('./routes/venue_route');
app.use(morgan('combined'));

app.get('/',(req,res)=>{
    res.send("This is home...");
});

app.use('/attendee',attendeeRouter);
app.use('/events',eventRouter);
app.use('/organizer',organizerRouter);
app.use('/payment',paymentRouter);
app.use('/ticket',ticketRouter);
app.use('/venue', venueRouter);

module.exports = app;
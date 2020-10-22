const express = require('express');
const whosThereRouter = require('./routes/whosThereRoute');
const contactsRouter = require('./routes/contactsRoutes');

const app = express();

app.use(express.json());
app.use('/api/whos-there', whosThereRouter);
app.use('/api/contacts', contactsRouter);

module.exports = app;
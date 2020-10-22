const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/whos-there', (req, res) => {
    res.send( 'Hi Trax! This is Reut Lichtenfeld :)' )
});

let contacts = new Map();

app.get('/api/contacts', (req, res) => {
    let contactsVal = [];
    contacts.forEach(val => contactsVal.push(val));
    res.send( contactsVal );
});

app.post('/api/contacts', (req, res) => {
    contacts.set(req.body.name, req.body);

    res.send(`Added new contact ${req.body.name}`);
});

app.get('/api/contacts/:contactName', (req, res) => {
    const contact = contacts.get(req.params.contactName);
    
    res.send( contact );
});

//START SERVER
const port = 3000;

app.listen(port, () => {
    console.log(`app running on port ${port}...`);
});
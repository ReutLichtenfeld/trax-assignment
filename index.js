const express = require('express');

const app = express();

app.get('/api/whos-there', (req, res) => {
    res.send( 'Hi Trax! This is Reut Lichtenfeld :)' )
});

let contacts = new Map();

app.get('/api/contacts', (req, res) => {
    let contactsVal = [];
    contacts.forEach(val => contactsVal.push(val));
    res.send( contactsVal );
});

//START SERVER
const port = 3000;

app.listen(port, () => {
    console.log(`app running on port ${port}...`);
});
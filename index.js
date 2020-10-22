const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/whos-there', (req, res) => {
    res.send( 'Hi Trax! This is Reut Lichtenfeld :)' )
});

let contacts = new Map();

//ROUTE HANDLERS
const hiTrax = (req, res) => {
    res.send( 'Hi Trax! This is Reut Lichtenfeld :)' )
}

const getAllContacts = (req, res) => {
   let contactsVal = [];
   contacts.forEach(val => contactsVal.push(val));
   res.send( contactsVal );
}

const postContact = (req, res) => {
   contacts.set(req.body.name, req.body);

   res.send(`Added new contact ${req.body.name}`);
}

const getContact = (req, res) => {
   const contact = contacts.get(req.params.contactName);
   
   res.send( contact );
}

//ROUTS
app.get('/api/whos-there', hiTrax);

app
   .route('/api/contacts')
   .get(getAllContacts)
   .post(postContact)

app.get('/api/contacts/:contactName', getContact);

//START SERVER
const port = 3000;

app.listen(port, () => {
    console.log(`app running on port ${port}...`);
});
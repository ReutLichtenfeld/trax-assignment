let contacts = new Map();

exports.getAllContacts = (req, res) => {
    let contactsVal = [];
    contacts.forEach(val => contactsVal.push(val));
    res.send( contactsVal );
}

exports.postContact = (req, res) => {
    contacts.set(req.body.name, req.body);

    res.send(`Added new contact ${req.body.name}`);
}

exports.getContact = (req, res) => {
    
    const contact = contacts.get(req.params.contactName);

    if(!contact) res.status(404).send( `${req.params.contactName} not fount` );
    
    res.send( contact );
}
const express = require('express');
const contactController = require('../controllers/contactsController');

const router = express.Router();

router
    .route('/')
    .get(contactController.getAllContacts)
    .post(contactController.postContact)

router.get('/:contactName', contactController.getContact);

module.exports = router;
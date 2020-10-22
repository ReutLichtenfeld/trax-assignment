const express = require('express');
const whosThereController = require('../controllers/whosThereController');

const router = express.Router();

router.get('/', whosThereController.hiTrax);

module.exports = router;
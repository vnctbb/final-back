'use strict';

const express = require('express');
const router = express.Router();

const user_controller = require('../service/user.js')

router.get('/:email', user_controller.findOne)

module.exports = router;
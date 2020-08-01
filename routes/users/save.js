const express = require('express');
const router = express.Router();
const users=require('../../controllers/users/save')

/* GET home page. */
router.post('/',users.save )

module.exports = router;

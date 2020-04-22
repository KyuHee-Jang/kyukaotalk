const express = require('express');

const { tokenVerify } = require('../auth/tokenVerify');

const router = express.Router();

router.get('/', tokenVerify, (req, res) => {

});


router.post('/', tokenVerify, (req, res) => {

});

router.put('/', tokenVerify, (req, res) => {

});


router.delete('/', tokenVerify, (req, res) => {

});

module.exports = router;
